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
  
  buildSidebarSubNav(field){
    if(field.containing_object){
      return field.containing_object.properties.map(subfield => {
        return (
          <li key={subfield.id} className="nav__link-section-item">
            <a href="" className="nav__link-section">{subfield.name} </a>
          </li>
        )
      })
    } else {
      return field.properties.map(subfield => {
        return (
          <li key={subfield.id} className="nav__link-section-item">
            <a href="" className="nav__link-section">{subfield.name} </a>
          </li>
        )
      })
    }
  }

  
  
  
  
  
  
  buildSidebarNav(categoryNested, categoryName, activeCategory, setActiveCategory){
    return categoryNested.map(field => {
      return (
        <li key={field.id} className={`nav__link-item ${this.checkLink(activeCategory, field.name )}`} >
          <a id={field.name} className="nav__link" onClick={(e)=>setActiveCategory(field.name)} >{field.name}</a>
          <ul className="nav__link-sections">
            {this.buildSidebarSubNav(field)}
          </ul>
        </li> 
      )
    })
  }
  
  render(){
    return (
      <>
        {this.buildSidebarNav(this.props.categoryNested, this.props.categoryName,this.props.activeCategory, this.props.setActiveCategory )}
      </>
    )
  }
}

export default NestedNav;