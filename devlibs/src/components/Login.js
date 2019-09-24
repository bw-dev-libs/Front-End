import React from "react";
import axiosWithAuth from './utils/axiosWithAuth';
import styled from 'styled-components';

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
      .post('https://dev-libs.herokuapp.com/api/auth/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/DevLibPage');
      })
      
    }
    render() {
  return (
    <Container>
      <Page>
        
    <LoginForm onSubmit={this.handleSubmit}>
    <Left>
      <Header>Dev-Libs!</Header>
      <Header>Login in here!</Header>
      <Paragraph>By logging in you agree to the ridiculously long terms that you didn't read.</Paragraph>
      </Left>
      <SVG viewBox="0 0 320 300">
      <linearGradient
       
        id="linearGradient"
        x1="13"
        y1="193.49992"
        x2="307"
        y2="193.4992"
        gradientUnits="userSpaceOnUse">
          <stop
          style="stopColor:#55af64;"
          offset="0%"
          id="stop876" />
          <stop
          style="stopColor:#f5f5f5;"
          offset="1%"
          id="stop878" />
          </linearGradient>
          <Path
          d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.0016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20.1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
          </SVG>
    <Right>
    <Label>Username</Label>
    <Form>
      <Input
      type="text"
      name="username"
      placeholder="username"
      value={this.state.credentials.username}
      onChange={this.handleChange}
      />
      <Label>Password</Label>
      <Input
      type="password"
      name="password"
      value={this.state.credentials.password}
      onChange={this.handleChange}
      placeholder="password"
      />
      <Button>Login!</Button>
      </Form>
      </Right>
    </LoginForm>
    </Page>
    </Container>
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
  width: calc(100%-40px)
    @media (max-width: 767px){
      height: auto;
      margin-bottom: 20px;
      padding-bottom: 20px
    }`
const Page = styled.div`
  display:flex;
  height: 320px;
  margin: 0 auto;
  width: 640px
    @media (max-width: 767px){
      flex-direction: column;
      height: 630px;
      widthL 320px
    }`
const Left = styled.div`
  background: white;
  height: calc(100% - 40px);
  top: 20px;
  position: relative;
  width: 50%
    @media (max-width: 767px){
      height: 100%;
      left: 20px;
      width: calc(100% - 40px);
      max-width: 270px
    }`
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
  width: 50%;
    @media (max-width: 767px){
      flex-shrink: 0;
      height: 100%;
      width: 100%;
      max-height: 350px
    }`
const SVG = styled.svg`
  position: absolute;
  width: 320px`
const Path = styled.path`
  fill:none;
  stroke: url(#linearGradient);;
  stroke-width: 4;
  stroke-dasharray: 240 1386`
const Form = styled.div`
  margin: 40px;
  position: absolute`
const Label = styled.h2`
  color: black;
  display: block;
  font-size: 14px;
  height: 16px;
  margin-top: 20px;
  margin-bottom: 5px`
const Input = styled.input`
  background: transparent;
  border: 0;
  color: white;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  outline: none !important;
  width: 100%;
    ::-moz-focus-inner {
      border: 0;
    }`
const Button = styled.button`
  color: #55af64;
  margin-top: 40px;
  transition: color 300ms;
    :focus{
      color: #f5f5f5;
    }
    :active {
      color: #a6a6a6;
    }`

