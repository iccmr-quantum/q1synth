import React from 'react';
import { Controls } from './features/controls/Controls';
import { Sliders } from './features/sliders/Sliders';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="section1">
                <h1 className="appTitle">QuSynth</h1>
                <h2 className="appCredits">Interdisciplinary Centre For Computer Music Research (ICCRM).</h2>
                <p className="appInstructions">Rotate and measure the qubit to quantum-design a sound.</p>
                <Controls />
            </div>
            <div className="section2">
                <Sliders group="env" title="Envelope"/>
                <Sliders group="modEnv" title="Mod Envelope"/>
            </div>
        </div>
    );
}

export default App;
