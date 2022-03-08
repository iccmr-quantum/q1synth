import React, { useEffect } from 'react';
import { Controls } from './features/controls/Controls';
import { SidePanel } from './features/sidePanel/SidePanel';
import { Button } from './features/buttons/Button';
import { enableMidi, getMidiStatus, getActiveMidiInput } from './midi/midiSlice';
import { 
    setControl, 
    toggleIsFullScreen, 
    getIsFullScreen, 
    setData,
    getMode,
    setMode,
    randomise
} from './data/dataSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import './App.css';
import { WebMidi } from 'webmidi';
import { midiMap } from './midi/midiMap'

declare global {
    interface Window {
        qusynth:any;
    }
}

function App() {
    const mode = useAppSelector(getMode)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(enableMidi())
        window.qusynth && dispatch(setData(window.qusynth));
    }, [dispatch])

    useEffect(() => {
        const handleFullScreen = (e: KeyboardEvent) : void => {
            (mode === 'simple' || mode === 'advanced')
                && e.key === 'f' 
                && dispatch(toggleIsFullScreen())
        };
        window.addEventListener('keydown', handleFullScreen)
        return () => window.removeEventListener('keydown', handleFullScreen) 
    });
    
    const midiIsEnabled = useAppSelector(getMidiStatus)
    const midiInput = useAppSelector(getActiveMidiInput)
    const isFullScreen = useAppSelector(getIsFullScreen)
    
    midiIsEnabled 
        && midiInput
        && WebMidi.getInputById(midiInput).addListener('controlchange', e => {
            const { value } = e
            const { number } = e.controller
            const map = midiMap(number)
            map && value
                && dispatch(setControl({ group: map.group, key: map.key, value: +value }))
        });

    return (
        <div className="App">
            <div className="main">
                {!isFullScreen &&
                    <div className="info">
                        <h1>Q1Synth</h1>
                        <button 
                            className={`btn-mode ${mode === 'simple' && 'btn-mode--active'}`}
                            onClick={() => dispatch(setMode('simple'))}
                        >Simple</button> | <button
                            className={`btn-mode ${mode === 'advanced' && 'btn-mode--active'}`}
                            onClick={() => dispatch(setMode('advanced'))}
                        >Advanced</button>
                        
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
        </div>
    );
}

export default App;
