import React from 'react';



class FlatNav extends React.Component {
  
  checkLink(activeCategory){
    if (activeCategory === 'general') {
      return 'nav__link-item--active';
    }
  }
  
  render(){
    return (
      
      <li className={`nav__link-item ${this.checkLink(this.props.activeCategory)}`}>
        <a href="#mainTitle" id="general" className="nav__link">general Info - {this.props.activeCategory} - </a>
        <ul className="nav__link-sections">
          {this.props.categoryFlat.map(field => {
            return (
              <li key={field.id} className="nav__link-section-item">
                <a href="#{field.id}" className="nav__link-section scrollsection">{field.name}</a>
              </li>
            )
          })}
        </ul>
      </li>
    )
  }
}

export default FlatNav;