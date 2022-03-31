import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      playButton: true
    };
    this.switchState = this.switchState.bind(this);
    this.reset = this.reset.bind(this);
  }

  play() {
    this.timerId = setTimeout(
      () => this.counter(), 1000
    );
  }

  pause() {
    clearTimeout(this.timerId);
  }

  switchState() {
    this.setState({
      playButton: !this.state.playButton
    });
  }

  counter() {
    this.setState(() => (
      {
        count: (this.state.count + 1)
      }
    ));
  }

  reset() {
    if (this.state.playButton === false) {
      return;
    }
    this.setState({
      count: 0
    });
  }

  render() {
    let button = null;
    let count = this.state.count;
    if (count === 3) {
      count = 'React is a library';
    }
    if (this.state.playButton === false) {
      this.play();
      button = 'fa-pause';
    } else {
      this.pause();
      button = 'fa-play';
    }
    return (
      <div>
        <div onClick={this.reset}className="row circle">
          <p>{count}</p>
        </div>
        <div onClick={this.switchState} className="row"><i className={`fa-solid fa ${button}`}></i></div>
      </div>
    );
  }
}

export default Stopwatch;
