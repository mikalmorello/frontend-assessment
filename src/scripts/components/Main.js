import React from 'react';
import MainSection from './MainSection';

class Main extends React.Component {

  
  render(){
    
    return (
      <main id="main" className="main">
        <div className="main__container">
          <header className="main__header">
            <h2 id="mainTitle" className="main__title">{this.props.activeCategory}</h2>
          </header>
          <div id="mainContent" className="main__content">
            <MainSection sectionTitle="Section Title"  sectionId="1234" />  
          </div>
        </div>
      </main>
    )
  }
  
}

export default Main;