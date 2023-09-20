import './App.css';
import Header from './portfolio/header';
import Home from './portfolio/home';
import About from './portfolio/about';
import Edu from './portfolio/education';
import Skills from './portfolio/skills';
import Exp from './portfolio/experience';
import Project from './portfolio/project';
import Contact from './portfolio/contact';


export default function MyApp() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Batool Al-Jonidee</title>

      <Header />

      <section className="container">
        <Home />
        <About />
        <Edu />
        <Skills />
        <Exp />        
        <Project />
        <Contact />
      </section>
    </>
  );
}
