import React, { Component } from 'react';
import NavBar from '../Components/navbar/navbar';
import CategoryMenu from '../Components/categoryMenu/categoryMenu';
import BreadCrumb from '../Components/breadCrumb/breadCrumb';
import LoginForm from '../Components/loginForm/loginForm';



class Header extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CategoryMenu />
        <BreadCrumb /> 
        <LoginForm /> 
      </div>
    );
  }
}

export default Header