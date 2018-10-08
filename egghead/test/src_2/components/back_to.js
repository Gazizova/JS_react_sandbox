import React, {Component} from 'react';
import { Link } from 'react-router';
import './back-to.css'

export default ({to, title}) => (
  <div className="form-group back-to">
     <Link to={to} className="btn btn-secondary" role="button" aria-pressed="true">
         {title}
     </Link>
 </div>
);

