import React from 'react';

function Navigation() {
    const handleClick = () => {
        console.log("click handled")
      }

    return (
        <header>
        <nav>
        <ul className="flex-row">
        <li className="mx-2" onClick={() => handleClick()}>
            <a href="#about">
            About me
            </a>
        </li>
        <li className="mx-2" onClick={() => handleClick()}>
            <a href="#Portfolio">
            Portfolio
            </a>
        </li>
        <li className="mx-2" onClick={() => handleClick()}>
            <a href="#Contact">
            Contact
            </a>
        </li>
        <li className="mx-2" onClick={() => handleClick()}>
            <a href="#Resume">
            Resume
            </a>
        </li>
        </ul>
    </nav>  
   </header>
    );
  }
  
  export default Navigation;