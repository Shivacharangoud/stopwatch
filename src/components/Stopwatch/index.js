import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {count: 0, isTimerRunning: false}

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  start = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({count: prevState.count + 1}))
    }, 1000)
    this.setState({isTimerRunning: true})
  }

  stop = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  reset = () => {
    clearInterval(this.intervalId)
    this.setState({count: 0})
  }

  minutes = () => {
    const {count} = this.state
    const minute = Math.floor(count / 60)
    if (minute < 10) {
      return `0${minute}`
    }
    return minute
  }

  seconds = () => {
    const {count} = this.state
    const second = Math.floor(count % 60)
    if (second < 10) {
      return `0${second}`
    }
    return second
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.minutes()}:${this.seconds()}`
    return (
      <div className="bg-container">
        <div className="second-bg-con">
          <h1>Stopwatch</h1>
          <div className="card">
            <div className="logo-timer-con">
              <img
                className="logo"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p className="timer-para">Timer</p>
            </div>
            <h1 className="count">{time}</h1>
            <div>
              <button
                disabled={isTimerRunning}
                onClick={this.start}
                type="button"
                className="start"
              >
                start
              </button>
              <button onClick={this.stop} type="button" className="stop">
                stop
              </button>
              <button onClick={this.reset} type="button" className="reset">
                reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
