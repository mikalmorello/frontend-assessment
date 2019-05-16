import React from 'react';
import Main from './components/Main'
import Sidebar from './components/Sidebar'

class App extends React.Component {
  //state = { open: false }
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: 'loaded',
      categoryNested: [],
      categoryFlat:[],
      activeCategory: 'general',
      activeField: undefined
    }
    this.setActiveCategory = this.setActiveCategory.bind(this);
    this.setActiveField = this.setActiveField.bind(this);
  } 
  
  componentDidMount(){
    //console.log("the component is now mounted");
    this.setState({loading: true})
    fetch('./schema.json') 
      .then(data => data.json())
      .then(data => this.setState({data, loading: false}))
  }
  
  componentDidUpdate(){
    //console.log("the component just updated");
  }
  
  setActiveCategory(newCategory){
    this.setState({
      activeCategory: newCategory
    })
  }
  
  setActiveField(newField){
    this.setState({
      activeField: newField
    })
  }
  
  buildSidebarMenu(data, categoryNested) {
    if (categoryNested === undefined || categoryNested.length == 0) {
      data.map(field => {
        if (field.containing_object || field.properties) {
          this.state.categoryNested.push(field);
        } else {
          this.state.categoryFlat.push(field);
        }
      })
    }
  }


  render(){
    //console.log(this.state.data);
    console.log(this.state.activeField);
    this.buildSidebarMenu(this.state.data, this.state.categoryNested);
    
    return (
      <div className="body__container"> 

        <Main 
          data={this.state.data} 
          categoryFlat={this.state.categoryFlat} 
          categoryNested={this.state.categoryNested} 
          activeCategory={this.state.activeCategory} 
        />
        <Sidebar 
          categoryFlat={this.state.categoryFlat} 
          categoryNested={this.state.categoryNested} 
          activeCategory={this.state.activeCategory} 
          activeField={this.state.activeField} 
          setActiveCategory={this.setActiveCategory}
          setActiveField={this.setActiveField}
        />
        
      </div>
    );
  }
}

export default App;