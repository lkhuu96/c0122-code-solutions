import React from 'react';

const listItems = ['Home', 'Get Started', 'Sign In'];

function makeLists() {
  const list = listItems.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return list;
}
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.navToggle = this.navToggle.bind(this);
  }

  navToggle() {
    this.setState({
      display: !this.state.display
    });
  }

  render() {
    let modalClass = 'ease-in';
    let bgClass = 'fade-in';
    let canToggle = this.navToggle;
    if (this.state.display === false) {
      modalClass = 'ease-out';
      bgClass = 'fade-out';
      canToggle = function () {};
    }
    return (
      <div>
        <div onClick={canToggle} className={`shade absolute ${bgClass}`}>
        </div>
        <i onClick={this.navToggle} className="fa-solid fa fa-bars absolute"></i>
        <div className={`modal absolute ${modalClass}`}>
          <h1>Menu</h1>
          <ul onClick={this.navToggle}>{makeLists()}</ul>
        </div>
      </div>
    );
  }
}
export default Modal;
