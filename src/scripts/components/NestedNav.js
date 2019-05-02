import React from 'react';
import NestedSubnav from './NestedSubnav'

const NestedNav = props => (
  <li className="nav__link-item">
    <a href="#mainTitle" id={props.fieldId} className="nav__link">{props.displayName}</a>
    <NestedSubnav fieldId="5678" displayName="Display Name"/> 
  </li>
);


export default NestedNav;