import React from 'react';
import './hangman.css'

const hangingman = () => {
    return (
        <div className="hangman">
            <div className="bottom"></div>
            <div className="middle"></div>
            <div className="top"></div>
            <div className="rope"></div>
            <div className="head"></div>
            <div className="body"></div>
            <div className="right-leg"></div>
            <div className="left-leg"></div>
            <div className="right-arm"></div>
            <div className="left-arm"></div>
        </div>
    )
}

export default hangingman
