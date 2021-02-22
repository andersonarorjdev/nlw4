import React from 'react';
import './experienceBar.css';


export function ExperienceBar(){
    return(
    <header className="experience-bar">
        <span>0xp</span>
        <div>
            <div className="Loading" style={{background:'var(--green)', width:'40%'}}/>
            <div className="CurrentXP" style={{left: '50%'}}>300XP</div>
        </div>
        <span>600xp</span>
    </header>
        );
}

export default ExperienceBar;