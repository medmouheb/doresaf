import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer/Footer'
import SlideMainImage from '../../Components/slideMainImage/slideMainImage';
import CardDescription from '../../Components/card/cardDescription';
// import TechnicalSheet from '../Components/technicalSheet/technicalSheet';
import './Details.css'
let productDescription = 
  // {} objet
  {
      Nom: "Nounours Puluche",
      Prix: "150 DT",
      Reduction: "0%",
      Disponibilite: false,
      Livraison: "le produit sera livré sur tout le territoire de la Tunisie à partir de 01/05/2019",
      ListCaraImg: ["le rom est 4 ","le ram est 4","le disque dur est 1"],
      Rating: 4
  }



 class Details extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <TechnicalSheet /> */}
        <div className ="ProductDetails"> 
        <SlideMainImage />
        <CardDescription Description={productDescription} />
        </div>
        <Footer /> 
      </div>
    )
  }
}
export default Details