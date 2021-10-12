import React from 'react';
import { Dial } from './features/dial/Dial';
import { Sliders } from './features/sliders/Sliders';
import './App.css';

function App() {
    return (
        <div className="App">
            <Sliders side="left"/>
            <Dial />
            <Sliders side="right"/>
        </div>
    );
}

export default App;
