import './projects.scss';
import utilities from '../../helpers/utilities';
import projectsData from '../../helpers/data/projectsData';

const displayAllProjects = () => {
  let domString = '<h1 class="text-center">Projects</h1>';
  domString += '<div id="projects-section" class="d-flex flex-wrap justify-content-center">';
  projectsData.getAllProjects()
    .then((projects) => {
      projects.forEach((project) => {
        // eslint-disable-next-line no-use-before-define
        domString += projectCardBuilder(project);
      });
      domString += '</div>';
      utilities.printToDom('projectsPage', domString);
    })
    .catch((error) => console.error(error));
};

const projectCardBuilder = (project) => {
  let domString = '';
  if (project.available === true) {
    domString += `
    <div id="${project.id}" class="card projectCard card-body" style=" width: 20em; max-width: 500px; height: 100%; margin: 2em;">
      <img src="${project.screenshot}" class="card-img-top" alt="..." style="width: 100%; height: auto;">
      <br>
      <h5 class="card-title" id="project">${project.title}</h5>
      <p class="card-text"><small class="text-muted">${project.technologiesUsed}</small></p>
      <p class="card-text">${project.description}</p>
      <a class="text-center" href="${project.url}">Project Link</a>
      <a class="text-center" href="${project.githubUrl}">Github</a>
    </div>`;
  }
  return domString;
};

export default { displayAllProjects };
