import React from 'react';
import "./letters.css";

const letters = ({ letters, checkLetter }) => {
    return (
        <div className="keyboard">
            {letters.map(letter => <div className="letters" 
            onClick={checkLetter}
            key={letter}>{letter}</div>)}
        </div>
    )
}

export default letters
