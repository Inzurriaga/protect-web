import React from "react";
import { connect } from "react-redux";
import Header from "../header/Header";
import Home from "../home/Home";
import Login from "../login/Login";

function App(props) {
  return (
    <div className="App">
      <Header />
      {
        props.login ? <Home /> : <Login />
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  login: state.login
})

export default connect(mapStateToProps)(App);
