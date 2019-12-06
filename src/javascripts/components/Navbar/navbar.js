import $ from 'jquery';

const displayBio = () => {
  $('#navToBio').on('click', () => {
    $('#bioPage').show();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
  });
};

const displayTechnologies = () => {
  $('#navToTechnologies').on('click', () => {
    $('#technologiesPage').show();
    $('#bioPage').hide();
    $('#projectsPage').hide();
  });
};

const displayProjects = () => {
  $('#navToProjects').on('click', () => {
    $('#projectsPage').show();
    $('#bioPage').hide();
    $('#technologiesPage').hide();
  });
};

const attachNavbarEvents = () => {
  displayBio();
  displayTechnologies();
  displayProjects();
};

export default { attachNavbarEvents };
