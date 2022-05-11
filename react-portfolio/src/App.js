import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [projectsSelected, setProjectsSelected] = useState(false);

  if(aboutSelected){
    return (
      <div>
        <Nav      
          setContactSelected={setContactSelected}
          setAboutSelected={setAboutSelected}
          setProjectsSelected={setProjectsSelected}
        ></Nav>
        <main>
           
          <>
            <About></About>
          </>
    
        </main>
  
        <Footer></Footer>
      </div>
    );
  }
  else if(contactSelected){
    return (
      <div>
        <Nav      
          setContactSelected={setContactSelected}
          setAboutSelected={setAboutSelected}
          setProjectsSelected={setProjectsSelected}
        ></Nav>
        <main>
           
          <>
            <ContactForm></ContactForm>
          </>
    
        </main>
  
        <Footer></Footer>
      </div>
    );
  }
  else{
    return (
      <div>
        <Nav      
          setContactSelected={setContactSelected}
          setAboutSelected={setAboutSelected}
          setProjectsSelected={setProjectsSelected}
        ></Nav>
        <main>
           
          <>
            <Projects></Projects>
          </>
    
        </main>
  
        <Footer></Footer>
      </div>
    );
  }
  
}

export default App;

