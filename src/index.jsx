import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import { jokes } from './jokes';
import { Joke } from './Joke/index';

const App = () => {
  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          id={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislike={joke.dislikes}
        ></Joke>
      ))}
    </div>
  );
};

render(<App />, document.querySelector('#app'));
