import React, { Component } from 'react'
import Header from './Header'
import Grid from '../Components/grid/grid';
import Filters from '../Components/filters/filters';
import Footer from './Footer/Footer'

class Liste extends Component {
  render() {
    return (
      <div>
       <Header />
       <div style = {{display : "flex"}}>
       <Filters />
       <Grid />
       </div>
       <Footer /> 
       
      </div>
    )
  }
}

export default Liste