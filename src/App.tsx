import React from 'react';
import { Controls } from './features/controls/Controls';
import { Sliders } from './features/sliders/Sliders';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="section1">
                <h1 className="appTitle">Title</h1>
                <h2 className="appCredits">Credits</h2>
                <p className="appInstructions">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <Controls />
            </div>
            <div className="section2">
                <Sliders group="env" title="Envelope"/>
                <Sliders group="modEnv" title="Mod Envelope"/>
                {/* <div className="download">
                    <Button name="download" isActive={false} onClick={(...args) => console.log(args)} />
                </div> */}
            </div>
        </div>
    );
}

export default App;
