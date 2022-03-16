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
    randomise,
    setPreset,
    setButtonActive
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

    // enable midi | dispatch state string if exists
    useEffect(() => {
        dispatch(enableMidi())
        window.qusynth && dispatch(setData(window.qusynth));
    }, [dispatch])

    // fullscreen handling
    useEffect(() => {
        const handleFullScreen = (e: KeyboardEvent) : void => {
            (mode === 'simple' || mode === 'advanced')
                && e.key === 'f' 
                && dispatch(toggleIsFullScreen())
        };
        const handleResize = () => window.innerWidth < 600 && mode !== 'simple' && dispatch(setMode('simple'))

        window.addEventListener('keydown', handleFullScreen)
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('keydown', handleFullScreen) 
    });
    
    const midiIsEnabled = useAppSelector(getMidiStatus)
    const midiInput = useAppSelector(getActiveMidiInput)
    const isFullScreen = useAppSelector(getIsFullScreen)
    
    // midi input
    midiIsEnabled 
        && midiInput
        && WebMidi.getInputById(midiInput).addListener('controlchange', e => {
            const { value } = e
            const { number } = e.controller
            const map = midiMap(number)
            if(!map || !value) return

            map.key === 'play' && dispatch(setButtonActive('rotate'));
            map.key === 'stop' && dispatch(setButtonActive(null));
            // map.key === 'measure' && dispatch(setButtonActive('measure'));
            map.key === 'randomise' && dispatch(randomise());
            map.group === 'preset' && dispatch(setPreset(+map.key));
            !['preset', 'action'].includes(map.group) && dispatch(setControl({ group: map.group, key: map.key, value: +value }));
        });

    return (
        <div className="App">
            <div className="main">
                {!isFullScreen &&
                    <div className="info">
                        <h1>Q1Synth</h1>
                        <div className="modes">
                            <button 
                                className={`btn-mode ${mode === 'simple' && 'btn-mode--active'}`}
                                onClick={() => dispatch(setMode('simple'))}
                            >Simple</button> | <button
                                className={`btn-mode ${mode === 'advanced' && 'btn-mode--active'}`}
                                onClick={() => dispatch(setMode('advanced'))}
                            >Advanced</button>
                        </div>
                        
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
