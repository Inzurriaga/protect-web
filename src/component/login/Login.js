import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      test: "hello im the login"
    }
  }

  render() {
    return(
      <section>
        <h1>hello im the login</h1>
      </section>
    )
  }
}