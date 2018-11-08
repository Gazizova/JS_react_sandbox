import React from 'react';
import { Link } from 'react-router-dom';
import './back-to.css'

export default ({to, title}) => (
  <div className="form-group back-to">
     <Link to={to} className="btn btn-secondary" >
         {title}
     </Link>
 </div>
);

