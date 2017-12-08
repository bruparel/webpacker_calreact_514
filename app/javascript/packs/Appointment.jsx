import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from './utils';

export const Appointment = ({appointment}) =>
  <div className="appointment">
    <Link to={`/appointments/${appointment.id}`}>
    <h3>{appointment.title}</h3>
    </Link>
    <p>{formatDate(appointment.appt_time)}</p>
  </div>
