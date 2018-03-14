import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navigation extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    return (
        <nav className="container">
          <div className="card">
            <div className="nav flex-column nav-pills">
              {console.log(this.props.location.state)}
              <Link to={'/homepage'}><a id="dashboard-link-home"
                  className={`nav-link ${this.props.location.pathname === '/homepage' ? 'active' : ''}`}
                  data-toggle="pill" href="#v-pills-home"
                  aria-controls="v-pills-home" aria-selected="true">Home</a></Link>
              <Link to={'/dashboard'}><a id="dashboard-link-dashboard"
                  className={`nav-link ${this.props.location.pathname === '/dashboard'
                      ? 'active'
                      : ''}`} data-toggle="pill"
                  href="#v-pills-dashboard" aria-controls="v-pills-dashboard"
                  aria-selected="false">Dashboard</a></Link>
              <Link to={'/transfer'}><a className={`nav-link ${this.props.location.pathname ===
              '/transfer'
                  ? 'active'
                  : ''}`} data-toggle="pill" href="#v-pills-transfer"  aria-controls="v-pills-transfer" aria-selected="false">Transfer</a></Link>
              {<Link to={'/topUp'}><a className={`nav-link ${this.props.location.pathname ===
              '/topUp'
                  ? 'active'
                  : ''}`} data-toggle="pill" href="#v-pills-transaction"  aria-controls="v-pills-transaction" aria-selected="false">Top Up</a></Link>}
              {/*<Link to={'/payee'}><a className="nav-link" data-toggle="pill" href="#v-pills-payeelist"  aria-controls="v-pills-payeelist" aria-selected="false">Payee List</a></Link>*/}
            </div>
          </div>
        </nav>
    );
  }
}

export default withRouter(Navigation);
