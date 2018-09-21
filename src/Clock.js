import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: props.start, on: false };
  }

  toggleClock = () => {
    const { time, on } = this.state;
    const { start, increment } = this.props;
    if (on) {
      clearInterval(this.interval);
      this.setState({ time: start, on: false });
    } else {
      this.setState({ on: true, time: time + increment });
      this.interval = setInterval(() => {
        if (this.state.time <= 0) {
          this.toggleClock();
        } else {
          this.setState({ time: this.state.time + increment });
        }
      }, 1000);
    }
  }

  render() {
    const { time, on } = this.state;
    return (
      <div className="Clock">
        <h1>{this.props.title}</h1>
        <div className={`Clock-display Clock-display--${on ? 'on' : 'off'}`}>
          {time}
        </div>
        <button className="Button" onClick={this.toggleClock}>
          {on ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

export default Clock;
