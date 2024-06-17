import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { Education } from "./Components/Education/Education";
import { Experience } from "./Components/Experience/Experience";
import { Contact } from "./Components/Contact/Contact";

function App() {


  return (
    <div className = {styles.App}>
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
