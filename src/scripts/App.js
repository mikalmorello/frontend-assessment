import React from 'react';
import Main from './components/Main'
import Sidebar from './components/Sidebar'

class App extends React.Component {
  //state = { open: false }
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      freeBookmark: true,
      data: [],
      loading: false
    }
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  } 
  
  /*toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }*/
  
  componentDidMount(){
    console.log("the component is now mounted");
    this.setState({loading: true})
    fetch('./schema.json') 
      .then(data => data.json())
      .then(data => this.setState({data, loading: false}))
  }
  
  componentDidUpdate(){
    console.log("the component just updated");
  }

  toggleOpenClosed(){
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    console.log(this.state)
    return (
      <div className="body__container"> 
        <Main title="Main Title" mainState={this.state.open ? 'open' : 'closed' } freeBookMark={this.state.freeBookMark}/>
        <Sidebar />
        <button onClick={this.toggleOpenClosed}>Toggle State</button>
      </div>
    );
  }
}

export default App;