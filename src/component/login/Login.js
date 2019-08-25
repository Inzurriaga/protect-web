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
      <section className="login">
        <form className="login-form">
            <legend>login</legend>
            <label>
              <p>Station ID</p>
              <input type="text" placeholder="Station ID"></input>
            </label>
            <label>
              <p>Password</p>
              <input type="password" placeholder="password"></input>
            </label>
            <button>Login</button>
        </form>
      </section>
    )
  }
}