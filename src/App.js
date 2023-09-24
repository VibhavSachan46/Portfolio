import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import bg from "./assets/bg.jpg"

function App() {
  return (
    <div>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <SocialLinks />
      </div>
  );
}

export default App;
