import React from 'react';



class FlatNav extends React.Component {
  
  checkLink(activeElement, elementName){
    if (activeElement === elementName) {
      return 'active';
    } else {
      return ''
    }
  }
  

  
  render(){
    return (
      
      <li className={`nav__link-item ${this.checkLink(this.props.activeCategory, 'general')}`}>
        <a id="general" className="nav__link" onClick={(e)=>this.props.setActiveCategory('general')} >general Info</a>
        <ul className="nav__link-sections">
          {this.props.categoryFlat.map(field => {
            return (
              <li key={field.id} className={`nav__link-section-item ${this.checkLink(this.props.activeField, field.name)}`}> 
                <a className="nav__link-section scrollsection" onClick={(e)=>this.props.setActiveField(field.name)} >{field.name}</a>
              </li>
            )
          })}
        </ul>
      </li>
    )
  }
}

export default FlatNav;