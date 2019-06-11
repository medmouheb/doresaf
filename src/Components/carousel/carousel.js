import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'


let tab = [
  {
    Titre: "Slide 1",
    Src: "https://d2h1pu99sxkfvn.cloudfront.net/b0/1931043/213159732.jpg",
    Description: " description Slide 1"
  },
  {
    Titre: " Slide 2",
    Src: "https://img.bfmtv.com/c/630/420/212/962a8ae88f8b6edd04127e7a55f2a.jpg",
    Description: "description Slide 2"
  },
  {
    Titre: "Slide 3",
    Src: "https://www.mbtech.fr/c/183-category_default/appareil-photo-jetable.jpg",
    Description: "description Slide 3"
  },
  {
    Titre: "Slide 3",
    Src: "https://images-na.ssl-images-amazon.com/images/I/515dGji7NeL._SY355_.jpg",
    Description: "description Slide 3"
  }

]
class ControlledCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div >
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >

          {tab.map(element => {
            return (
              <Carousel.Item>
                <img
                  style={{height:"400px",width:"100%"}}
                  src={element.Src}
                  alt={element.Titre}
                />
                <Carousel.Caption>
                  <h3>{element.Titre}</h3>
                  <p>{element.Description}</p>
                </Carousel.Caption>
              </Carousel.Item>

            )
          })}

        </Carousel>
      </div>

    );
  }
}

export default ControlledCarousel;