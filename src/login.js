import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // For now we'll just log the user's username and password.
    // In a real app, you'd want to send this information to your server or some sort of authentication service.
    console.log(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({
      username: '',
      password: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;
