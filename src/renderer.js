/* eslint-env browser */
const path = require('path');
const remote = require('electron').remote;

const activeProject = remote.getGlobal('activeProject');
const webview = document.getElementById('content');

webview.setAttribute('src', path.join(activeProject.contentDir, activeProject.homePage));
