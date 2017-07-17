const path = require('path');

const defaultProject = {
  projectName: 'default',
  workingDir: 'C:\\Users\\yaniv\\dev\\kb',
  buildCommand: 'venv\\Scripts\\activate.bat & make.bat html',
  contentDir: path.join(__dirname, '..', 'content'),
  homePage: 'index.html',
};

exports.loadProject = () => defaultProject;
