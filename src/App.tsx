import React, { useEffect } from 'react';
import { Controls } from './features/controls/Controls';
import { SidePanel } from './features/sidePanel/SidePanel';
import { enableMidi, getMidiStatus, getActiveMidiInput } from './midi/midiSlice';
import { setControl } from './data/dataSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import './App.css';
import { WebMidi } from 'webmidi';
import { midiMap } from './data/midiMap'

function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(enableMidi())
    }, [dispatch])
    
    const midiIsEnabled = useAppSelector(getMidiStatus)
    const midiInput = useAppSelector(getActiveMidiInput)

    midiIsEnabled 
        && midiInput
        && WebMidi.getInputById(midiInput).addListener('controlchange', e => {
            const { value } = e
            const { number } = e.controller
            const {group, key} = midiMap(number)
            group && key && value
                && dispatch(setControl({group, key, value: +value}))
        });

    return (
        <div className="App">
            <div className="main">
                <h1>QuSynth</h1>
                <h2>Interdisciplinary Centre For Computer Music Research (ICCMR).</h2>
                <p>Rotate and measure the qubit to quantum-design a sound.</p>
                <Controls />
            </div>
            <SidePanel />
        </div>
    );
}

export default App;
