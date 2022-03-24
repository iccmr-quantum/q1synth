import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Controls } from './features/controls/Controls';
import { SidePanel } from './features/sidePanel/SidePanel';
import { Button } from './features/buttons/Button';
import { Loading } from './features/loading/Loading';
import { enableMidi } from './midi/midiSlice';
import { 
    toggleIsFullScreen, 
    getIsFullScreen, 
    setData,
    getMode,
    setMode,
    randomise,
} from './data/dataSlice';

import { setQasmStatus, getIsMeasuring } from './qasm/qasmSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import './App.css';
import { connect } from './qasm/socket'

declare global {
    interface Window {
        qusynth:any;
    }
}

function App() {
    const mode = useAppSelector(getMode)
    const isFullScreen = useAppSelector(getIsFullScreen)
    const isMeasuring = useAppSelector(getIsMeasuring)
    const dispatch = useAppDispatch()

    const search = useLocation().search;
    const useQasm = new URLSearchParams(search).get('qasm');
    
    // enable midi | dispatch state string if exists | connect to python server if exists
    useEffect(() => {
        dispatch(enableMidi())

        window.qusynth && dispatch(setData(window.qusynth));

        const handleQasmConnection = (status: boolean, id?: string) => {
            alert(`${status ? 'Connected to ' : 'Disconnected from'} QASM server ${id ? id : ''}`)
            dispatch(setQasmStatus(status))
        }
        useQasm && connect(handleQasmConnection);
    }, [dispatch])

    // fullscreen handling
    useEffect(() => {
        const handleFullScreen = (e: KeyboardEvent) : void => {
            (mode === 'simple' || mode === 'advanced')
                && e.key === 'f' 
                && dispatch(toggleIsFullScreen())
        };
        const handleResize = () => window.innerWidth < 600 && mode !== 'simple' && dispatch(setMode('simple'))

        window.addEventListener('keydown', handleFullScreen)
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('keydown', handleFullScreen) 
    });

    return (
        <div className="App">
            <div className="main">
                {!isFullScreen &&
                    <div className="info">
                        <h1>Q1Synth</h1>
                        <div className="modes">
                            <button 
                                className={`btn-mode ${mode === 'simple' && 'btn-mode--active'}`}
                                onClick={() => dispatch(setMode('simple'))}
                            >Simple</button> | <button
                                className={`btn-mode ${mode === 'advanced' && 'btn-mode--active'}`}
                                onClick={() => dispatch(setMode('advanced'))}
                            >Advanced</button>
                        </div>
                        
                        <div className='btn-randomise'>
                            <Button 
                                name="randomise"
                                onClick={() => dispatch(randomise())}
                            />
                        </div>
                    </div>
                }
                <Controls />
            </div>
            {!isFullScreen && <SidePanel />}
            {!isMeasuring && <Loading />}
        </div>
    );
}

export default App;
