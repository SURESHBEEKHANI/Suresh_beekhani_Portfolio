import React from 'react';
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Portfolio } from './components/Portfolio'
import { Skills } from './components/Skills'
import { Service } from './components/Service'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Service />
      <Portfolio />
      <Experience />


      <Contact />
    </div>
  );
}

export default App;
