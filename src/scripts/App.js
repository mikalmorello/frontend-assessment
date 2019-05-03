import React from 'react';
import Main from './components/Main'
import Sidebar from './components/Sidebar'

class App extends React.Component {
  //state = { open: false }
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
  } 
  
  /*toggleOpenClosed = () => {
    this.setState({
      open: !this.state.open
  })*/

  toggleOpenClosed(){
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    console.log(this.state)
    return (
      <div className="body__container"> 
        <Main title="Main Title" mainState={this.state.open ? 'open' : 'closed' }/>
        <Sidebar />
        <button onClick={this.toggleOpenClosed}>Toggle State</button>
      </div>
    );
  }
}

export default App;