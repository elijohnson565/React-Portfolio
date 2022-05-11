import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Projects from './components/Projects';

function App() {


  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav>
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      </Nav>
      <main>
      
      {!contactSelected ? (
          <>
            <About></About>
            <Projects></Projects>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
  
      </main>
    </div>
  );
}

export default App;

