import React, { Component } from "react";
import { connect } from "react-redux";

export class PersonnelCard extends Component {
  render() {
    const { id, personnels } = this.props
    return(
      <section className={`personnel-card personnel-${id}`}>
        {
          !personnels[id] ? <h2 className="personnel-offline">Offline</h2> : 
          <article>
            <div>
              <p>Heart Rate {personnels[id].pulse}</p>
              <p>spo2 {personnels[id].sp02}</p>
              <p>temperature {personnels[id].temperature}</p>
            </div>
            <div>
              <p>CO2 {personnels[id].co2}</p>
              <p>CO {personnels[id].co}</p>
              <p>H2s {personnels[id].h2s}</p>
            </div>
          </article>
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  personnels: state.personnels
})


export default connect(mapStateToProps)(PersonnelCard)