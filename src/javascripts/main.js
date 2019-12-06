import 'bootstrap';
import '../styles/main.scss';
import navbar from './components/Navbar/navbar';
import projects from './components/Projects/projects';

const init = () => {
  projects.displayAllProjects();
  navbar.attachNavbarEvents();
};

init();
