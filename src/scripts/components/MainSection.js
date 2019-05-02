import React from 'react';
import SectionProperty from './SectionProperty';

const MainSection = props => (
  <section id={props.sectionId} className="section section--main">
    <div className="section__header">
      <h3 className="section__title">{props.sectionTitle}</h3>
    </div>
    <ul className="section__data-list">
      <SectionProperty propertyDescription="Description1" displayName="Name1" fieldName="field_name1"/>
      <SectionProperty propertyDescription="Description2" displayName="Name2" fieldName="field_name2"/>
      <SectionProperty propertyDescription="Description3" displayName="Name3" fieldName="field_name3"/>
    </ul>
  </section>
);


export default MainSection;