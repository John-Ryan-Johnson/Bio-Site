import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const demProjects = response.data;
      const projects = [];
      Object.keys(demProjects).forEach((pId) => {
        demProjects[pId].id = pId;
        projects.push(demProjects[pId]);
      });
      resolve(projects);
    })
    .catch((error) => reject(error));
});

export default { getAllProjects };
