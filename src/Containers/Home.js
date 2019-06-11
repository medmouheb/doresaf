import React, { Component } from 'react'
import Header from './Header'
import ControlledCarousel from '../Components/carousel/carousel';
import Grid from '../Components/grid/grid';
import Footer from './Footer/Footer'

 class Home extends Component {
  render() {
    return (
      <div>
        <Header /> 
        <ControlledCarousel />
        <Grid />
        <Footer /> 
      </div>
    )
  }
}
export default Home