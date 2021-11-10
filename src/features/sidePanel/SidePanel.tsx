import React from 'react';
import { Sliders } from '../sliders/Sliders';
// import './App.css';

export function SidePanel() {
    return (
        <div className="side-panel">
            <Sliders group="env" title="Envelope"/>
            <Sliders group="modEnv" title="Mod Envelope"/>
        </div>
    );
}
