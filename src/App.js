import logo from './logo.svg';
import './App.css';
// import { Home } from './navbarComponents/Home';
import { Nav } from './navbarComponents/Nav';
import { Home } from './navbarComponents/Home';
import About from './navbarComponents/About';
import Projects from './navbarComponents/Projects'
import Contacts from './navbarComponents/Contacts';


function App() {
  return (
    <div className="App">

      <Nav />

      <main>
        <Home />
        <About />
        <Projects />
        <Contacts />
      </main>
      <footer className='dark:bg-slate-800 dark:text-white'>

        <p class="text-sm text-center h-5/5">&copy; 2024 Sudip Das. All rights reserved.</p>

      </footer>
    </div>
  );
}

export default App;
