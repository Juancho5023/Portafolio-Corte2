import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GitIgnore from './components/GitIgnore';
import Footer from './components/Footer';
import './App.css';  // Mantenemos los estilos aquí si lo prefieres

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <GitIgnore />
      <Footer />
    </div>
  );
}

export default App;
