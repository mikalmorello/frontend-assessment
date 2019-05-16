import React from 'react';
import MainSection from './MainSection';

class Main extends React.Component {
  
  checkLink(activeCategory, categoryFlat){
    if (activeCategory === 'general') {
      return categoryFlat.map(field => {
        return (
          <section key={field.id} className="section section--main">
            <div className="section__header">
              <h3 className="section__title">{field.name}</h3>
            </div>
            <ul className="section__data-list">
              <li className="section__data-item">
                <div className="section__data">
                  <h4 className="section__data-title">Type</h4>
                </div>
                <div className="section__data-description">
                  {field.data_type}
                </div>
              </li>
              <li className="section__data-item">
                <div className="section__data">
                  <h4 className="section__data-title">Usage</h4>
                </div>
                <div className="section__data-description">
                  {field.app_keys}
                </div>
              </li>
              <li className="section__data-item">
                <div className="section__data">
                  <h4 className="section__data-title">Evertrue Field Name</h4>
                </div>
                <div className="section__data-description">
                  {field.name}
                </div>
              </li>
            </ul>
          </section>
        )
      })
    } else {
      return ''
    }
  }
  
  
  render(){
    console.log(this.props.data);
    return (
      <main id="main" className="main">
        <div className="main__container">
          <header className="main__header">
            <h2 id="mainTitle" className="main__title">{this.props.activeCategory}</h2>
          </header>
          <div id="mainContent" className="main__content">
            <MainSection sectionTitle="Section Title"  sectionId="1234" />  
            {this.checkLink(this.props.activeCategory, this.props.categoryFlat)}
          </div>
        </div>

      </main>
    )
  }
  
}

export default Main;