import React from 'react';
import FlatNav from './FlatNav'
import NestedNav from './NestedNav'

const SidebarNav = props => (
  <ul id="sidebarNavLinks" className="nav__links">
    <FlatNav fieldId="1234" displayName="display name" categoryFlat={props.categoryFlat} activeCategory={props.activeCategory} />
    <NestedNav fieldId="1234" displayName="display name" content="content" categoryNested={props.categoryNested} activeCategory={props.activeCategory} />
  </ul>
);


export default SidebarNav;