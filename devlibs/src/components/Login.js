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
    <div>
      <div>
        
    <form onSubmit={this.handleSubmit}>
    <div>
      <h1>Dev-Libs!</h1>
      <p>Login in here!</p>
      <p>By logging in you agree to the ridiculously long terms that you didn't read.</p>
      </div>
      <SVG viewBox="0 0 320 300">
      <linearGradient
       
        id="linearGradient"
        x1="13"
        y1="193.49992"
        x2="307"
        y2="193.4992"
        gradientUnits="userSpaceOnUse">
          <stop
          style="stop-color:#55af64;"
          offset="0"
          id="stop876" />
          <stop
          style="stop-color:#f5f5f5;"
          offset="1"
          id="stop878" />
          </linearGradient>
          <path
          d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.0016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20.1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
          </SVG>
    <div>
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
      </div>
    </form>
    </div>
    </div>
  );
    }
}

export default Login;



// Styles

const LoginForm = styled.form`
  background: #a6a6a6;
  font-family: 'Squarefont', Regular;
  margin: 0;
  padding:20px`
const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  height: calc(100%-40px);
  position: absolute;
  place-content: center;
  width: calc(100%-40px)`
const Page = styled.div`
  display:flex;
  height: 320px;
  margin: 0 auto;
  width: 640px`
const Left = styled.div`
  background: white;
  height: calc(100% - 40px);
  top: 20px;
  position: relative;
  width: 50%`
const Header = styled.h1`
  font-size: 50px;
  font-weight: 900;
  margin: 50px 40px 40px`
const Paragraph = styled.p`
  color: #55af64;
  font-size: 14px;
  line-height: 1.5;
  margin: 40px`
const Right = styled.div`
  background: #f5f5f5;
  box-shadow: 0px 0px 40px 16px rgba(166,166,166,0.22);
  color: black;
  position: relative;
  width: 50%`
const SVG = styled.svg`
  position: absolute;
  width: 320px`