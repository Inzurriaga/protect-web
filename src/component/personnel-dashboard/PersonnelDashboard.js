import React, { Component } from "react";
import { connect } from "react-redux";
import PersonnelCard from "../personnel-card/PersonnelCard";
import io from 'socket.io-client/dist/socket.io';
import { updatePersonnels } from "../../action/index"

export class PersonnelDashboard extends Component {
  constructor() {
    super();
    this.socket = io("http://localhost:3000");
    this.socket.emit('what', 'Hi server im the web');
    this.socket.on("what", (data) => {
      this.props.updatePersonnels(data)
    })
  }

  render() {
    const  personnel = []
    for(var i = 0; i < 6; i++){
      personnel.push(<PersonnelCard key={i} id={i} />)
    }
    return(
      <section className="personnel-dashboard">
        {
         personnel
        }
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updatePersonnels: personnels => dispatch(updatePersonnels(personnels))
})

export default connect(null, mapDispatchToProps)(PersonnelDashboard)