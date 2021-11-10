import React from 'react';
import { Controls } from './features/controls/Controls';
import { SidePanel } from './features/sidePanel/SidePanel';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="main">
                <h1 className="appTitle">QuSynth</h1>
                <h2 className="appCredits">Interdisciplinary Centre For Computer Music Research (ICCMR).</h2>
                <p className="appInstructions">Rotate and measure the qubit to quantum-design a sound.</p>
                <Controls />
            </div>
            <SidePanel />
        </div>
    );
}

export default App;
