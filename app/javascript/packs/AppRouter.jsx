import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Appointments from './Appointments';
import { Appointment } from './Appointment';

export default (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={ routeProps => (
          <Appointments {...routeProps} appointments={props.appointments} />
        )} />
        <Route path="/appointments/:id" component={Appointment} />
      </Switch>
    </Router>
  )
}
