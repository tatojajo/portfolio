import { useState } from 'react';
import Main from './components/Main';
import Sidenav from './components/Sidenav';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
