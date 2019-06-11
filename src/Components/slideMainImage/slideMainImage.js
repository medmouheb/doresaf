import React, { Component } from 'react'
import './slideMainImage.css'
let tab = [
    "https://tn.jumia.is/xz7qLJFXw-aqQXDX4TqhXBhpLdw=/fit-in/60x60/filters:fill(white):sharpen(1,0,false):quality(100)/product/04/7421/1.jpg?4656",
    "https://tn.jumia.is/b96joxrQn7E7rUSqjQNDoXEA33o=/fit-in/60x60/filters:fill(white):sharpen(1,0,false):quality(100)/product/04/7421/2.jpg?4656",
    "https://tn.jumia.is/YyOwN4xdiOsytuJNKAsx-ugCz5Y=/fit-in/60x60/filters:fill(white):sharpen(1,0,false):quality(100)/product/04/7421/3.jpg?4656",
    "https://tn.jumia.is/dtNHjjL54i2l5E4SgEtqCtfej04=/fit-in/60x60/filters:fill(white):sharpen(1,0,false):quality(100)/product/04/7421/4.jpg?4656" 
    
]

class SlideMainImage extends Component {
    state = {currentIndex :0}
  render() {
    return (
      <div style= {{display:"flex"}}>
          <div className="ProductImageSlides" >
          {tab.map((element, index)=> {
              return (
                <img src= {element}  onClick = {()=>{this.setState({currentIndex: index})}}/> 
              )
          })}
        </div>
        <div>
          <img className="MainProductImage" src = {tab[this.state.currentIndex] }/>
        </div>
        
      </div>
    )
  }
}
export default SlideMainImage