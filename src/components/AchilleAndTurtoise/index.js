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

            // Computing the turtoise's step ahead of time
            let nextDistance = newCompetitors[newCompetitors.length - 1].distance + competitors[newCompetitors.length - 1].step;

            // Reducing the turtoise's step by a small percentage.
            let nextStep = newCompetitors[newCompetitors.length - 1].step - (newCompetitors[newCompetitors.length - 1].step * .99 / 100);
            
            for (let i = 0; i < newCompetitors.length; i++) {
                if(i != newCompetitors.length - 1) {
                    // Each competitor that's behind (Achille) gets the previous distance of the competitor that's ahead of him
                    newCompetitors[i].distance = newCompetitors[i + 1].distance;
                } else {
                    // And the turtoise gets the next computed distance
                    newCompetitors[i].distance = nextDistance;
                    newCompetitors[i].step = nextStep;
                }
            }

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
