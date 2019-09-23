import React from "react";
import axiosWithAuth from './utils/axiosWithAuth';

class Login extends React.Component {
    state= {
      credentials: {
        username: '',
        password: ''
      }
    };
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
    handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
      .post('', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/DevLibPage');
      })
      
    }
    render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <h1>Welcome to the Bubble App!</h1>
      <p>Login in here!</p>
      <input
      type="text"
      name="username"
      placeholder="username"
      value={this.state.credentials.username}
      onChange={this.handleChange}
      />
      <input
      type="password"
      name="password"
      value={this.state.credentials.password}
      onChange={this.handleChange}
      placeholder="password"
      />
      <button>Login!</button>
    </form>
  );
    }
}

export default Login;