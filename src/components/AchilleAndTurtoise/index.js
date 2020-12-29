import React, { useState } from 'react'
import { competitors } from './constants';

import './style.css';


const AchilleAndTurtoise = () => {

    const [state, setState] = useState({
        competitors,
    });

    const [raceInterval, setRaceInterval] = useState(null);

    const stop = () => {
        let interval = raceInterval;
        if (interval != null) {
            clearInterval(interval);
            setRaceInterval(null);

            let newCompetitors = [...state.competitors];

            newCompetitors.forEach(competitor => {
                competitor.distance = competitor.restartDistance;
                competitor.step = competitor.restartStep
            });

            setState({
                ...state,
                competitors: newCompetitors,
            })

            return;
        }

    }

    const begin = () => {
        if (raceInterval != null) return;

        let interval = raceInterval;

        // We only get here when the race isn't playing
        interval = setInterval(() => {
            let newCompetitors = [...state.competitors];

            newCompetitors.map(competitor => {
                competitor.distance += competitor.step * competitor.speed;
                competitor.step = competitor.step / .99;
            });

            setState({
                ...state,
                competitors: newCompetitors,
            })

        }, 50);

        setRaceInterval(interval)
    }

    return (
        <div>
            <button className="begin_stop_button" onClick={begin}>Begin</button>
            <button className="begin_stop_button" onClick={stop}>Stop</button>

            <div className="race">
                <div className="line"></div>

                {competitors.map((competitor, index) => (
                    <div key={index}>
                        <div style={{ left: competitor.distance + '%', backgroundColor: competitor.color }} className="competitor">
                            <span className='competitor_name'>{competitor.name}</span>
                        </div>
                        
                        <div className="line"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AchilleAndTurtoise
