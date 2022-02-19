import React, { useEffect } from 'react';
import { Controls } from './features/controls/Controls';
import { SidePanel } from './features/sidePanel/SidePanel';
import { enableMidi, getMidiStatus, getActiveMidiInput } from './midi/midiSlice';
import { getMode, setControl, setMode } from './data/dataSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import './App.css';
import { WebMidi } from 'webmidi';
import { midiMap } from './midi/midiMap'
import { Qubit } from './features/qubit/Qubit';

function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(enableMidi())
    }, [dispatch])

    useEffect(() => {
        const handleFullScreen = (e: KeyboardEvent) : void => {
            e.key === 'f' && dispatch(setMode('fullscreen'))
        };
        window.addEventListener('keydown', handleFullScreen)
        return () => window.removeEventListener('keydown', handleFullScreen) 
    });
    
    const midiIsEnabled = useAppSelector(getMidiStatus)
    const midiInput = useAppSelector(getActiveMidiInput)
    const mode = useAppSelector(getMode)

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
            {mode === 'interactive'
                ? <>
                    <div className="main">
                        <h1>QuSynth</h1>
                        <h2>Interdisciplinary Centre For Computer Music Research (ICCMR).</h2>
                        <p>Rotate and measure the qubit to quantum-design a sound.</p>
                        <Controls />
                    </div>
                    <SidePanel />
                </>
                :
                <div className="fullscreen"> 
                    <Qubit size={700}/>
                </div>
            }
        </div>
    );
}

export default App;
