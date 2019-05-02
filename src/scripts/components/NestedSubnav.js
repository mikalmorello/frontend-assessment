import React from 'react';

const NestedSubnav = props => (
  <ul className="nav__link-sections">
    <li className="nav__link-section-item">
      <a href="#{props.fieldId}" className="nav__link-section">{props.displayName}</a>
    </li>
    <li className="nav__link-section-item">
      <a href="#{props.fieldId}" className="nav__link-section">{props.displayName}</a>
    </li>
    <li className="nav__link-section-item">
      <a href="#{props.fieldId}" className="nav__link-section">{props.displayName}</a>
    </li>
  </ul> 
);


export default NestedSubnav;