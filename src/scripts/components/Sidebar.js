import React from 'react';

const Sidebar = props => (
  <aside className="sidebar">
    <div className="sidebar__container">
      <header className="sidebar__header">
        <img className="sidebar__logo" src={require("/images/evertrue_logo.png")} />
      </header>
      <nav className="nav nav--sidebar">
        <h2 className="nav__title">Field Groups</h2>
        <ul id="sidebarNavLinks" className="nav__links">
        </ul>
      </nav>
    </div>
  </aside>
);


export default Sidebar;