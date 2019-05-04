import React from 'react'
import SidebarNav from './SidebarNav'

class Sidebar extends React.Component {
  render(){
    
    return (
      <aside className="sidebar">
        <div className="sidebar__container">
          <header className="sidebar__header">
            <img alt="evertrue" className="sidebar__logo" alt="Evertrue Logo" src={require("/images/evertrue_logo.png")} />
          </header>
          <nav className="nav nav--sidebar">
            <h2 className="nav__title">Field Groups</h2>
            <SidebarNav categoryFlat={this.props.categoryFlat} categoryNested={this.props.categoryNested} activeCategory={this.props.activeCategory}/>
          </nav>
        </div>
      </aside>
    )
  }
}


export default Sidebar;