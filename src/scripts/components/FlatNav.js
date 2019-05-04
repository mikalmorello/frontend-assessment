import React from 'react';

function checkLink(activeCategory){
  if (activeCategory === 'general') {
    return 'nav__link-item--active';
  } 
}


const FlatNav = props => (
    <li className={`nav__link-item`}>
      {props.activeCategory}

      <a href="#mainTitle" id="general" className="nav__link">general Info</a>
      <ul className="nav__link-sections">
        {props.categoryFlat.map(field => {
          return (
          <li key={field.id} className="nav__link-section-item">
            <a href="#{field.id}" className="nav__link-section scrollsection">{field.name}</a>
          </li>
         )
        })}
      </ul>
    </li>
);


export default FlatNav;