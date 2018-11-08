import React, { Component } from 'react';

import './Login.css';

import twitterLogo from '../twitter.svg';

export default class Login extends Component {
  state = {
    username: ''
  };

  handleInputChange = e => {
    this.setState({ username: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { username } = this.state;
    if (!username) return;

    localStorage.setItem('@Twitter:username', username);

    this.props.history.push('/timeline');
  };

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="Twitter" />
        <form onSubmit={this.handleFormSubmit}>
          <input
            placeholder="Nome do usuário"
            value={this.username}
            onChange={this.handleInputChange}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
