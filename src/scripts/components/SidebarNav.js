import React from 'react';
import FlatNav from './FlatNav'
import NestedNav from './NestedNav'


class SidebarNav extends React.Component {
  render(){
    
    return (
      <ul id="sidebarNavLinks" className="nav__links">
        <FlatNav 
          categoryFlat={this.props.categoryFlat} 
          activeCategory={this.props.activeCategory} 
          activeField={this.props.activeField} 
          setActiveCategory={this.props.setActiveCategory}
          setActiveField={this.props.setActiveField}
        />
        <NestedNav 
          categoryNested={this.props.categoryNested} 
          activeCategory={this.props.activeCategory} 
          activeField={this.props.activeField} 
          setActiveCategory={this.props.setActiveCategory}
          setActiveField={this.props.setActiveField}
        />
      </ul>
    )
  }
}

export default SidebarNav;