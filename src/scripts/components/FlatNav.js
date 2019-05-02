import React from 'react';

const FlatNav = props => (
    <li className="nav__link-item">
      <a href="#mainTitle" id="general" className="nav__link">general Info</a>
      <ul className="nav__link-sections">
        <li className="nav__link-section-item">
          <a href="#{props.fieldId}" className="nav__link-section scrollsection">{props.displayName}</a>
        </li>
        <li className="nav__link-section-item">
          <a href="#{props.fieldId}" className="nav__link-section scrollsection">{props.displayName}</a>
        </li>
        <li className="nav__link-section-item">
          <a href="#{props.fieldId}" className="nav__link-section scrollsection">{props.displayName}</a>
        </li>
      </ul>
    </li>
);


export default FlatNav;