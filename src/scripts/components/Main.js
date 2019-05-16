import React from 'react';
import MainSection from './MainSection';
import SectionProperty from './SectionProperty';

class Main extends React.Component {
  
  buildMainContent(activeCategory, categoryFlat, categoryNested){
    if (activeCategory === 'general') {
      return categoryFlat.map(field => {
        return (
          <section key={field.id} className="section section--main">
            <div className="section__header">
              <h3 className="section__title">{field.name}</h3>
            </div>
            <ul className="section__data-list">
              <SectionProperty propertyDescription={field.data_type}  fieldName="Type" />
              <SectionProperty propertyDescription={field.app_keys}  fieldName="Usage" />
              <SectionProperty propertyDescription={field.name} fieldName="Evertrue Field Name" />
            </ul>
          </section>
        )
      })
    } else {
      return categoryNested.map(field => {
        if (activeCategory === field.name) {
          if(field.containing_object){
            return field.containing_object.properties.map(subfield => {
              return (
                <section key={subfield.id} className="section section--main">
                  <div className="section__header">
                    <h3 className="section__title">{subfield.name}</h3>
                  </div>
                  <ul className="section__data-list">
                    <SectionProperty propertyDescription={subfield.data_type}  fieldName="Type" />
                    <SectionProperty propertyDescription={subfield.app_keys}  fieldName="Usage" />
                    <SectionProperty propertyDescription={subfield.name} fieldName="Evertrue Field Name" />
                  </ul>
                </section>
              )
            })
          } else {
            return field.properties.map(subfield => {
              return (
                <section key={subfield.id} className="section section--main">
                  <div className="section__header">
                    <h3 className="section__title">{subfield.name}</h3>
                  </div>
                  <ul className="section__data-list">
                    <SectionProperty propertyDescription={subfield.data_type}  fieldName="Type" />
                    <SectionProperty propertyDescription={subfield.app_keys}  fieldName="Usage" />
                    <SectionProperty propertyDescription={subfield.name} fieldName="Evertrue Field Name" />
                  </ul>
                </section>
              )
            })
          }
        }
      })
                              
    }
  }
  
  
  render(){
    return (
      <main id="main" className="main">
        <div className="main__container">
          <header className="main__header">
            <h2 id="mainTitle" className="main__title">{this.props.activeCategory}</h2>
          </header>
          <div id="mainContent" className="main__content">
            {this.buildMainContent(this.props.activeCategory, this.props.categoryFlat, this.props.categoryNested)}
          </div>
        </div>

      </main>
    )
  }
  
}

export default Main;