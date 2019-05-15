import React from 'react'
import NestedSubnav from './NestedSubnav'

class NestedNav extends React.Component {
  
  checkLink(activeCategory, categoryName){
    if (activeCategory === categoryName) {
      return 'nav__link-item--active';
    } else {
      return 'nada'
    }
  }
  
  render(){
    return (
      <>
        {this.props.categoryNested.map(field => {
          return (
            <li key={field.id} className={`nav__link-item ${this.checkLink(this.props.activeCategory, field.name )}`} >
              <button onClick={this.props.setActiveCategory}>button</button>
              <a href="#{field.id}" id={field.name} className="nav__link" onClick={this.props.setActiveCategory} >{field.name} -{this.props.activeCategory}- </a>
              <NestedSubnav fieldId="5678" displayName="Display Name"/> 
            </li> 
          )
        })}
      </>
    )
  }
}

export default NestedNav;