import * as Layout from './layout.js';
import * as Utils from './utils.js'
import * as Login from './login.js'

document.addEventListener('DOMContentLoaded', function (){

    Layout.includeNav();
    Layout.setupTabs();

    Login.includeModalLogin();

  }, false);