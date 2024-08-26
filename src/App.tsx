
// import './App.css'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import About from './components/About'
// import Projects from './components/Projects'
// import Skills from './components/Skills'
// import Resume from './components/Resume'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

// function App() {

//   return (
//     <>
//     <Navbar />  
//     <Hero />  
//     <About />
//     <Projects />
//     <Skills />
//     <Resume />
//     <Contact />
//     <Footer />
//     </>
//   )
// }

// export default App

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
