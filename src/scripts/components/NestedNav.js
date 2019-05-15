import React from 'react'
import NestedSubnav from './NestedSubnav'

class NestedNav extends React.Component {
  
  checkLink(activeCategory, categoryName){
    if (activeCategory === categoryName) {
      return 'active';
    } else {
      return ''
    }
  }
  
  render(){
    return (
      <>
        {this.props.categoryNested.map(field => {
          return (
            <li key={field.id} className={`nav__link-item ${this.checkLink(this.props.activeCategory, field.name )}`} >
              <a id={field.name} className="nav__link" onClick={(e)=>this.props.setActiveCategory(field.name)} >{field.name}</a>
              <NestedSubnav fieldId="5678" displayName="Display Name"/> 
            </li> 
          )
        })}
      </>
    )
  }
}

export default NestedNav;