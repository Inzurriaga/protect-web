import React, { Component } from "react";

export default class Home extends Component  {
  constructor() {
    super();
    this.state = {
      test: "hello"
    }
  }

  render() {
    return(
      <section>
        <h1>hello world</h1>
      </section>
    )
  }
}