import React, { Component } from "react";
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
        <button className="button">
          <Personnel className="personnel-image button-image"/>
          <p>personnel</p>
        </button>
        <button className="button">
          <Graph className="graph-image button-image"/>
          <p>Data</p>
        </button>
      </section>
    )
  }
}