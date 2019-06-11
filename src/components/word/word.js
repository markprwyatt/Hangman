import React from 'react';
import './word.css';



const word = ({ word, guessedLetters }) => {
    
    let blankWord = '_ '.repeat(word.length);
    
   

    return (
        <div className="word">
           <div className="letter">{blankWord}</div> 
        </div>
    )
}

export default word
