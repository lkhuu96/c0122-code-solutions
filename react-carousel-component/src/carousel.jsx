import React, { useState } from 'react';

const images = ['001', '004', '007', '025', '039'];

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       interval: null,
//       image: images[0],
//       imageIndex: 0
//     };
//     this.nextImage = this.nextImage.bind(this);
//     this.prevImage = this.prevImage.bind(this);
//     this.jumpToImage = this.jumpToImage.bind(this);
//   }

//   componentDidMount() {
//     this.setState({
//       interval: setInterval(() => this.nextImage(), 3000)
//     });
//   }

//   nextImage() {
//     let counter = this.state.imageIndex;
//     if (counter === images.length - 1) {
//       counter = -1;
//     }
//     this.jumpToImage((counter + 1));
//   }

//   jumpToImage(index) {
//     clearInterval(this.state.interval);
//     this.setState({
//       interval: setInterval(() => this.nextImage(), 3000),
//       image: images[index],
//       imageIndex: index
//     });

//   }

//   prevImage() {
//     let counter = this.state.imageIndex;
//     if (counter === 0) {
//       counter = images.length;
//     }
//     this.jumpToImage((counter - 1));
//   }

//   makeCircles() {
//     return images.map((item, index) => {
//       if (this.state.imageIndex === index) {
//         return (<i onClick={() => this.jumpToImage(index)} key={index} className="fas fa-circle"></i>);
//       } else {
//         return (<i onClick={() => this.jumpToImage(index)} key={index} className="far fa-circle"></i>);
//       }
//     });
//   }

//   render() {
//     return (
//       <div className='carousel-container'>
//         <div className="row center">
//           <i onClick={this.prevImage}className="fa-solid fa fa-chevron-left"></i>
//           <img src={`./../images/${this.state.image}.png`}></img>
//           <i onClick={this.nextImage}className="fa-solid fa fa-chevron-right"></i>
//         </div>
//         <div className="row center">
//           {this.makeCircles()}
//         </div>
//       </div>
//     );
//   }
// }

function Carousel() {
  const [image, setImage] = useState(images[0]);
  const [imageIndex, setIndex] = useState(0);
  function changeImage(direction) {
    if ((imageIndex + direction) > images.length - 1) {
      setIndex(0);
      setImage(images[0]);
    } else if ((imageIndex + direction) < 0) {
      setIndex(images.length - 1);
      setImage(images[images.length - 1]);
    } else {
      setIndex(imageIndex + direction);
      setImage(images[imageIndex + direction]);
    }
  }
  return (
    <div className='carousel-container'>
      <div className="row center">
        <i onClick={() => changeImage(-1)}className="fa-solid fa fa-chevron-left"></i>
        <img src={`./../images/${image}.png`}></img>
        <i onClick={() => changeImage(1)}className="fa-solid fa fa-chevron-right"></i>
      </div>
      <div className="row center">
        {images.map((item, index) => {
          return (
            <i onClick={() => {
              setImage(images[index]);
              setIndex(index);
            }} key={index} className={'fa-circle ' + (imageIndex === index ? 'fas' : 'far')}></i>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
