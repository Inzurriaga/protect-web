import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      time: "00:00:00"
    }
    this.timer = setInterval(() => {
      let today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      if ( s < 10 ) {
        s = "0" + s;
      }
      if ( m < 10 ) {
        m = "0" + m;
      }
      this.setState({
        time: `${h}:${m}:${s}`
      })
    },500)
  }

  render() {
    return(
      <header>
        <p>{this.state.time}</p>
        <h1>TECH TO PROTECT</h1>
      </header>
    )
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}