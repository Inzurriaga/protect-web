import React, { Component } from "react";
import PersonnelCard from "../personnel-card/PersonnelCard"

export default class PersonnelDashboard extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const  personnel = []
    // for(var i = 0; i < 6; i++){
    //   personnel.push(<PersonnelCard id={i} />)
    // }
    return(
      <section className="personnel-dashboard">
        <h1>hllo</h1>
        {/* {
         personnel
        } */}
      </section>
    )
  }
}