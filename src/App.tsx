import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Controller } from './features/controller/Controller';
import { SidePanel } from './features/sidePanel/SidePanel';
import { Loading } from './features/loading/Loading';
import { enableMidi } from './midi/midiSlice';
import { 
    toggleIsFullScreen, 
    getIsFullScreen, 
    setData,
    getMode,
    setMode,
} from './data/dataSlice';
import { randomise, getQubit } from './synthesis/synthesisSlice';
import { setUseQasm, setQasmStatus, getIsMeasuring } from './qasm/qasmSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import './App.css';
import { connectSocQasm } from './qasm/socket'
import { connectOsc, sendXyz } from './osc/socket'

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
    const { x, y, z } = useAppSelector(getQubit)

    const search = useLocation().search;
    const useQasm = new URLSearchParams(search).get('qasm');
    const ensembleMode = new URLSearchParams(search).get('ensemble');
    const appId = new URLSearchParams(search).get('id') || '0';
    
    // enable midi | dispatch state string if exists | connect to python server if exists | send xyz if in ensemble mode
    useEffect(() => {
        dispatch(enableMidi())

        window.qusynth && dispatch(setData(window.qusynth));

        const handleQasmConnection = (id?: string) => {
            alert(`Connected to QASM server ${id ? id : ''}`)
            dispatch(setQasmStatus(true))
        }
        
        useQasm && dispatch(setUseQasm(true));
        useQasm && connectSocQasm(handleQasmConnection, dispatch);
        
        ensembleMode && connectOsc();
    }, [dispatch])

    // fullscreen handling
    useEffect(() => {
        const handleFullScreen = (e: KeyboardEvent) : void => {
            (mode === 'simple' || mode === 'advanced')
                && e.key === 'f' 
                && (e.target as HTMLElement).nodeName.toLowerCase() !== 'input'
                && dispatch(toggleIsFullScreen())
        };
        const handleResize = () => window.innerWidth < 600 && mode !== 'simple' && dispatch(setMode('simple'))

        window.addEventListener('keydown', handleFullScreen)
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('keydown', handleFullScreen) 
    });

    sendXyz(x,y,z,appId)

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
                            >Advanced</button> | <button
                            className={`btn-mode`}
                            onClick={() => dispatch(randomise())}
                            >?</button>
                        </div>
                    </div>
                }
                <Controller />
            </div>
            {!isFullScreen && <SidePanel /> }
            { isMeasuring && <Loading /> }
        </div>
    );
}

export default App;
