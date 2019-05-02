import React from 'react';
import SidebarNav from './SidebarNav'

const Sidebar = props => (
  <aside className="sidebar">
    <div className="sidebar__container">
      <header className="sidebar__header">
        <img className="sidebar__logo" src={require("/images/evertrue_logo.png")} />
      </header>
      <nav className="nav nav--sidebar">
        <h2 className="nav__title">Field Groups</h2>
        <SidebarNav /> 
      </nav>
    </div>
  </aside>
);


export default Sidebar;