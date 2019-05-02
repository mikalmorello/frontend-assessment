import React from 'react';
import Main from './components/Main'
import Sidebar from './components/Sidebar'
    
class App extends React.Component {

  render(){
    return (
      <div className="body__container">
        <Main />
        <Sidebar />  
      </div>
    );
  }
}

export default App;