import React from 'react';
import FlatNav from './FlatNav'
import NestedNav from './NestedNav'


class SidebarNav extends React.Component {
  render(){
    
    return (
      <ul id="sidebarNavLinks" className="nav__links">
        <FlatNav categoryFlat={this.props.categoryFlat} activeCategory={this.props.activeCategory} />
        <NestedNav categoryNested={this.props.categoryNested} activeCategory={this.props.activeCategory} />
      </ul>
    )
  }
}

export default SidebarNav;