import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
      categories = [],
      setCurrentCategory,
      contactSelected,
      currentCategory,
      setContactSelected,
      setAboutSelected,
      setProjectsSelected
    } = props;
  
    return (
      <header>
        <nav>
            <h1>My Portfolio</h1>      
            <div className="center">
              <a href="#about-me" onClick={() => {setProjectsSelected(false)
                                                setAboutSelected(true)
                                                setContactSelected(false)}}>
                <button>About Me</button>
              </a>
            </div>
            <div className="center">
              <a href="#my-work" onClick={() => {setProjectsSelected(true)
                                                setAboutSelected(false)
                                                setContactSelected(false)}}>
                  <button>My Work</button>
                  </a>
            </div>
            <div className="center">
              <a href="#" onClick={() => {
                                            setProjectsSelected(false)
                                            setAboutSelected(false)
                                            setContactSelected(true)
                                        }}>
                  <button>Contact</button>
                  </a>
            </div>
            ))
        </nav>
      </header>
    );
  }
  
  export default Nav;
  