import React, { useState } from 'react';

const listItems = ['Home', 'Get Started', 'Sign In'];

function makeLists() {
  const list = listItems.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return list;
}

function Modal() {
  const [nav, setNav] = useState(false);
  const [bg, setBg] = useState('fade-out');
  const [modal, setModal] = useState('ease-out');

  function toggleModal() {
    if (nav === true) {
      setNav(false);
      setBg('fade-out');
      setModal('ease-out');
    } else {
      setNav(true);
      setBg('fade-in');
      setModal('ease-in');
    }
  }

  function toggleBg() {
    if (bg === 'fade-in') {
      setNav(false);
      setBg('fade-out');
      setModal('ease-out');
    }
  }
  return (
    <div>
      <div onClick={() => toggleBg()} className={`shade absolute ${bg}`}>
      </div>
      <i onClick={() => toggleModal()} className="fa-solid fa fa-bars absolute"></i>
      <div className={`modal absolute ${modal}`}>
        <h1>Menu</h1>
        <ul onClick={() => toggleModal()}>{makeLists()}</ul>
      </div>
    </div>
  );
}
// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: false
//     };
//     this.navToggle = this.navToggle.bind(this);
//   }

//   navToggle() {
//     this.setState({
//       display: !this.state.display
//     });
//   }

//   render() {
//     let modalClass = 'ease-in';
//     let bgClass = 'fade-in';
//     let canToggle = this.navToggle;
//     if (this.state.display === false) {
//       modalClass = 'ease-out';
//       bgClass = 'fade-out';
//       canToggle = function () {};
//     }
//     return (
//       <div>
//         <div onClick={canToggle} className={`shade absolute ${bgClass}`}>
//         </div>
//         <i onClick={this.navToggle} className="fa-solid fa fa-bars absolute"></i>
//         <div className={`modal absolute ${modalClass}`}>
//           <h1>Menu</h1>
//           <ul onClick={this.navToggle}>{makeLists()}</ul>
//         </div>
//       </div>
//     );
//   }
// }
export default Modal;
