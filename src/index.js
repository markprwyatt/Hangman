import React from 'react';
import ReactDOM from 'react-dom';
import randomWords from 'random-words';

import Hangingman from './components/hangingman/hangingman';
import Word from './components/word/word';
import Letters from './components/letters/letters';




class App extends React.Component {

state = {word: '',
         livesLeft: 6,
         lettersLeft: [...'abcdefghijklmnopqrstuvwxyz'],
         guessedLetters: [],
         gameOver: false}

componentDidMount() {
   this.getRandomWord()
}

getRandomWord() {
  return this.setState({word: randomWords(1) + ''})
}

checkLetter = (e) => {
  const word = [...this.state.word]
  const letterPicked = e.target.innerHTML;
  for (let i = 0; i < word.length; i++) {
    if (letterPicked === word[i]) {
      console.log('ITS A MATCH');
      this.setState({
        lettersLeft: this.state.lettersLeft
        .filter(letter => letter !== letterPicked),
        guessedLetters: [...this.state.guessedLetters, letterPicked]
        });
     } 
  }

  if (!word.includes(letterPicked)) {
    console.log("Life lost");
    this.decreaseLivesLeft();
  }

  
   
}

decreaseLivesLeft() {
  this.setState(prevState => ({
    livesLeft: prevState.livesLeft - 1
  }))

  if (this.state.livesLeft === 0) {
    this.setState({gameOver: true})
  }
}


   
render() { 
    return (
        <div>
          <Hangingman livesLeft={this.state.livesLeft}/>
          <Word word={this.state.word}
          guessedLetters={this.state.guessedLetters}/>
          <Letters 
          letters={this.state.lettersLeft}
          checkLetter={this.checkLetter}
          />
        </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'))
