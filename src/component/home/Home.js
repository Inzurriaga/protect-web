import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Graph } from "../../assets/graph.svg";
import { ReactComponent as Personnel } from "../../assets/personnel.svg"

export default class Home extends Component  {
  constructor() {
    super();
    this.state = {
      test: "hello"
    }
  }

  render() {
    return(
      <section className="home">
        <NavLink to="/personnel" className="button">
          <Personnel className="personnel-image button-image"/>
          <p>personnel</p>
        </NavLink>
        <NavLink to="/data" className="button">
          <Graph className="graph-image button-image"/>
          <p>Data</p>
        </NavLink>
      </section>
    )
  }
}