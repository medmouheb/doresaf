import React, { Component } from 'react'
import Header from './Header';
import ContactForm from './Forms/ContactForm'
import Footer from './Footer/Footer'

class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContactForm />
        <Footer /> 
      </div>
    )
  }
}

export default Contact