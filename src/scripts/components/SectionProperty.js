import React from 'react';

const SectionProperty = props => (
  <li className="section__data-item">
    <div className="section__data">
      <h4 className="section__data-title">{props.fieldName}</h4>
    </div>
    <div className="section__data-description section__data-description--{props.fieldName}">
      {props.propertyDescription}
    </div>
  </li>
);


export default SectionProperty;