import React from 'react';
import ReactDOM from 'react-dom';
import randomWords from 'random-words';

import Hangingman from './components/hangingman/hangingman';
import Word from './components/word/word';
import Letters from './components/letters/letters';




class App extends React.Component {

state = {word: '',
         livesLeft: 6,
         lettersToPickFrom: [...'abcdefghijklmnopqrstuvwxyz'],
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
        guessedLetters: [...this.state.guessedLetters, letterPicked]
        });
     } 
  }

  if (!word.includes(letterPicked)) {
    this.decreaseLivesLeft();
  }

  
   
}

decreaseLivesLeft() {
  this.setState(prevState => ({
    livesLeft: prevState.livesLeft - 1
  }))

  if (this.state.livesLeft < 2) {
    this.setState({gameOver: true})
  }
}

resetRandomWord = () => {
  if (this.state.gameOver) {
    this.setState({word: '',
                   livesLeft: 6,
                   lettersToPickFrom: [...'abcdefghijklmnopqrstuvwxyz'],
                   guessedLetters: [],
                   gameOver: false})
  }
  this.getRandomWord()
}


   
render() { 
  
  if (this.state.gameOver) {
    return (
      <>
      <div>You gameOver!</div>
      <button onClick={this.resetRandomWord}>Reset</button>
      </>
    )
  }

  if (this.state.word.length === this.state.guessedLetters.length) {
    return (
      <>
      <div>You win!</div>
      <button onClick={this.resetRandomWord}>Reset</button>
      </>
    )
  }
  
  return (
        <div>
          <Hangingman livesLeft={this.state.livesLeft}/>
          <Word word={this.state.word}
          guessedLetters={this.state.guessedLetters}/>
          <Letters 
          letters={this.state.lettersToPickFrom}
          checkLetter={this.checkLetter}
          />
        </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'))
