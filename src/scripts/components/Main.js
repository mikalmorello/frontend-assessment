import React from 'react';
import MainSection from './MainSection';

const Main = props => (
  <main id="main" className="main">
    <div className="main__container">
      <header className="main__header">
        <h2 id="mainTitle" className="main__title">{props.title}  - {props.mainState}</h2>
      </header>
      <div id="mainContent" className="main__content">
        <MainSection sectionTitle="Section Title"  sectionId="1234" />  
      </div>
    </div>
  </main>
);


export default Main;