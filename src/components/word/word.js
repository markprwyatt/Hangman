import React from 'react';
import './word.css';



const word = ({ word, guessedLetters }) => {
    const blankWord = word.split('').map(() => '_ ')
    if (guessedLetters) {
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < word.length; j++) {
                if (word[i] === guessedLetters[j]) {
                    (blankWord[i] = guessedLetters[j]);
                }
            }
        }
    }

    return (
        <div className="word">
           <div className="letter">{blankWord}</div> 
        </div>
    )
}

export default word
