import React from 'react';

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['About', 'Project', 'Resume', 'Contact'];
  return (
      <header> 
    <ul className="nav nav-tabs flex-row space-between">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </header>
  );
}

export default NavTabs;
