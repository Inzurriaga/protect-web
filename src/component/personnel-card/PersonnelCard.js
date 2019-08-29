import React, { Component } from "react";
import { connect } from "react-redux";

export class PersonnelCard extends Component {
  render() {
    const { id, personnels } = this.props
    return(
      <section className={`personnel-card personnel-${id}`}>
        {
          !personnels[id] ? <h2 className="personnel-offline">Offline</h2> : 
          <p>im online</p>
        }
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  personnels: state.personnels
})


export default connect(mapStateToProps)(PersonnelCard)