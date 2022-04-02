import React from 'react';

const images = ['001', '004', '007', '025', '039'];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: setInterval(() => this.nextImage(), 3000),
      image: images[0],
      imageIndex: 0
    };
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.jumpToImage = this.jumpToImage.bind(this);
  }

  nextImage() {
    clearInterval(this.state.interval);
    let counter = this.state.imageIndex;
    if (counter === images.length - 1) {
      counter = -1;
    }
    this.setState({
      interval: setInterval(() => this.nextImage(), 3000),
      image: images[counter + 1],
      imageIndex: counter + 1
    });
  }

  jumpToImage(index) {
    clearInterval(this.state.interval);
    this.setState({
      interval: setInterval(() => this.nextImage(), 3000),
      image: images[index],
      imageIndex: index
    });

  }

  prevImage() {
    clearInterval(this.state.interval);
    let counter = this.state.imageIndex;
    if (counter === 0) {
      counter = images.length;
    }
    this.setState({
      interval: setInterval(() => this.nextImage(), 3000),
      image: images[counter - 1],
      imageIndex: counter - 1
    });
  }

  makeCircles() {
    return images.map((item, index) => {
      if (this.state.imageIndex === index) {
        return (<i onClick={() => this.jumpToImage(index)} key={index} className="fas fa-circle"></i>);
      } else {
        return (<i onClick={() => this.jumpToImage(index)} key={index} className="far fa-circle"></i>);
      }
    });
  }

  render() {
    return (
      <div className='carousel-container'>
        <div className="row center">
          <i onClick={this.prevImage}className="fa-solid fa fa-chevron-left"></i>
          <img src={`./../images/${this.state.image}.png`}></img>
          <i onClick={this.nextImage}className="fa-solid fa fa-chevron-right"></i>
        </div>
        <div className="row center">
          {this.makeCircles()}
        </div>
      </div>
    );
  }
}

export default Carousel;
