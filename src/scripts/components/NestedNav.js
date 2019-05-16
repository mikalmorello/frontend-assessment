import React from 'react'
import NestedSubnav from './NestedSubnav'

class NestedNav extends React.Component {
  
  checkLink(activeElement, elementName){
    if (activeElement === elementName) {
      return 'active';
    } else {
      return ''
    }
  }
  
  buildSidebarSubNav(field, activeField, setActiveField){
    if(field.containing_object){
      return field.containing_object.properties.map(subfield => {
        return (
          <li key={subfield.id}  className={`nav__link-section-item ${this.checkLink(activeField, subfield.name )}`}>
            <a className="nav__link-section" onClick={(e)=>setActiveField(subfield.name)}>{subfield.name}</a>
          </li>
        )
      })
    } else {
      return field.properties.map(subfield => {
        return (
          <li key={subfield.id}  className={`nav__link-section-item ${this.checkLink(activeField, subfield.name )}`}>
            <a className="nav__link-section" onClick={(e)=>setActiveField(subfield.name)}>{subfield.name}</a>
          </li>
        )
      })
    }
  }

  buildSidebarNav(categoryNested, categoryName, activeCategory, activeField, setActiveCategory, setActiveField){
    return categoryNested.map(field => {
      return (
        <li key={field.id} className={`nav__link-item ${this.checkLink(activeCategory, field.name )}`} >
          <a id={field.name} className="nav__link" onClick={(e)=>setActiveCategory(field.name)} >{field.name}</a>
          <ul className="nav__link-sections">
            {this.buildSidebarSubNav(field, activeField, setActiveField)}
          </ul>
        </li> 
      )
    })
  }
  
  render(){
    return (
      <>
        {this.buildSidebarNav(this.props.categoryNested, this.props.categoryName,this.props.activeCategory, this.props.activeField, this.props.setActiveCategory, this.props.setActiveField )}
      </>
    )
  }
}

export default NestedNav;