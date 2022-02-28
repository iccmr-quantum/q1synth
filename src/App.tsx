import React, { useEffect } from 'react';
import { Controls } from './features/controls/Controls';
import { SidePanel } from './features/sidePanel/SidePanel';
import { enableMidi, getMidiStatus, getActiveMidiInput } from './midi/midiSlice';
import { setControl, toggleIsFullScreen, getIsFullScreen } from './data/dataSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import './App.css';
import { WebMidi } from 'webmidi';
import { midiMap } from './midi/midiMap'

declare const window: any;

function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(enableMidi())
        console.log(window.qusynth)
    }, [dispatch])

    useEffect(() => {
        const handleFullScreen = (e: KeyboardEvent) : void => {
            e.key === 'f' && dispatch(toggleIsFullScreen())
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
                        <h1>QuSynth</h1>
                        <h2>Interdisciplinary Centre For Computer Music Research (ICCMR).</h2>
                        <p>Rotate and measure the qubit to quantum-design a sound.</p>
                        <p>f for fullscreen. shift + mouseY to rotate Y.</p>
                    </div>
                }
                <Controls />
            </div>
            {!isFullScreen && <SidePanel />}
        </div>
    );
}

export default App;
