import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';


function App() {
  useEffect(() => {
    fetch("/api")
    .then((res) => res.text())
    .then((data) => {console.log(data)})
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
