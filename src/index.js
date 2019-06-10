import React from 'react';
import ReactDOM from 'react-dom';

import Hangingman from './components/hangingman/hangingman';
import Word from './components/word/word';
import Letters from './components/letters/letters';

const App = () => {
    return (
        <div>
          <Hangingman />
          <Word />
          <Letters />
        </div>
    )
}


ReactDOM.render(<App />, document.querySelector('#root'))
