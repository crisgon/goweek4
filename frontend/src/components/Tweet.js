import React, { Component } from 'react';
import api from '../services/api';

import './Tweet.css';
import Like from '../like.svg';

export default class Tweet extends Component {
  handleLikes = async () => {
    const { _id } = this.props.tweet;
    await api.post(`/likes/${_id}`);
  };

  render() {
    const { content, author, likes } = this.props.tweet;

    return (
      <li className="tweet">
        <strong>{author}</strong>
        <p>{content}</p>
        <button type="submit" onClick={this.handleLikes}>
          <img src={Like} alt="Like" />
          {likes}
        </button>
      </li>
    );
  }
}
