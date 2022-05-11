import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  return (
    <header>
            <h1>My Portfolio</h1>      

            <div class="center">
                <a href="#about-me" onClick={() => setContactSelected(false)}><button>About Me</button></a>
            </div>
            <div class="center">
                <a href="#my-work" onClick={() => setContactSelected(false)}><button>My Work</button></a>
            </div>
            <div class="center">
                <a href="#contact"><button onClick={() => setContactSelected(true)}>Contact</button></a>
            </div>
        
           
        </header>
  );
}

export default Nav;
