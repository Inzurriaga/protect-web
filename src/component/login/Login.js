import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../action";

export class Login extends Component {

  login = (e) => {
    e.preventDefault();
    this.props.history.push("/home")
    this.props.loginUser(true)
  }

  render() {
    return(
      <section className="login">
        <form className="login-form">
            <legend>Login</legend>
            <label>
              <p>Station ID</p>
              <input type="text" placeholder="Station ID"></input>
            </label>
            <label>
              <p>Password</p>
              <input type="password" placeholder="Password"></input>
            </label>
            <button onClick={this.login}>Login</button>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: bool => dispatch(loginUser(bool))
})

export default connect(null, mapDispatchToProps)(Login)