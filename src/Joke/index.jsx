import React, { useState } from 'react';
import './style.css';

export const Joke = (props) => {
  const [upLikes, setUpLikes] = useState(props.likes);
  const [downLikes, setDownLikes] = useState(props.dislikes);

  const handleClickUp = () => {
    setUpLikes(upLikes + 1);
  };

  const handleClickDown = () => {
    setDownLikes(downLikes + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={props.userAvatar} />
          <p className="user-name">{props.userName}</p>
        </div>
        <p className="joke__text">{props.text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={handleClickUp}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {upLikes}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={handleClickDown}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {downLikes}
        </span>
      </div>
    </div>
  );
};
