import React from 'react';
import randomWords from 'random-words';
import './word.css';

const randomWord = randomWords(1) + ''

const word = () => {
    return (
        <div className="word">
           <div className="letter">{'_ '.repeat(randomWord.length)}</div> 
        </div>
    )
}

export default word
