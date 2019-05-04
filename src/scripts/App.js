import React from 'react';
import Main from './components/Main'
import Sidebar from './components/Sidebar'

class App extends React.Component {
  //state = { open: false }
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: false,
      categoryNested: [],
      categoryFlat:[],
      activeCategory: 'general',
      activeField: undefined
    }
    //this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
    //this.componentDidMount = this.componentDidMount.bind(this);
  } 
  
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

  /*toggleOpenClosed(){
    this.setState({
      open: !this.state.open
    })
  }*/

  render(){
    
    console.log(this.state.data);
    
    {this.state.data.map(field => {
      if (field.containing_object || field.properties) {
        this.state.categoryNested.push(field);
      } else {
          this.state.categoryFlat.push(field);
      }
    })};
                         
    console.log(this.state.categoryFlat);
    console.log(this.state.categoryNested);
    
    return (
      <div className="body__container"> 
        <Main title="Main Title" data={this.state.data} />
        <Sidebar categoryFlat={this.state.categoryFlat} categoryNested={this.state.categoryNested} activeCategory={this.state.activeCategory} />
      </div>
    );
  }
}

export default App;