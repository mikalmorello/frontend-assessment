import React from 'react'
import NestedSubnav from './NestedSubnav'

class NestedNav extends React.Component {
  render(){
    
    return (
      <>
        {this.props.categoryNested.map(field => {
          return (
            <li key={field.id} className="nav__link-item">
              <a href="#{field.id}" id={field.id} className="nav__link">{field.name}</a>
              <NestedSubnav fieldId="5678" displayName="Display Name"/> 
            </li> 
          )
        })}
      </>
    )
  }
}

export default NestedNav;