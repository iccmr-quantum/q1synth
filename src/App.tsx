import React from 'react';
import { Controls } from './features/controls/Controls';
import { SidePanel } from './features/sidePanel/SidePanel';
import './App.css';

function App() {
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
