import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter} from "react-router-dom"
import Header from "../header/Header";
import Home from "../home/Home";
import Login from "../login/Login";
import PersonnelDashboard from "../personnel-dashboard/PersonnelDashboard";
import DataDashboard from "../data-dashboard/DataDashboard";

class App extends Component {
  componentDidMount() {
    if(!this.props.login){
      this.props.history.push("/")
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/personnel" component={PersonnelDashboard} />
          {/* <Route path="/data" component={DataDashboard} /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login
})

export default connect(mapStateToProps)(withRouter(App));
