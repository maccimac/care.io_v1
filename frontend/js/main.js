import * as Layout from './layout.js';
import * as Utils from './utils.js'
import * as Login from './login.js'
import * as Booking from './booking.js'
import * as PageHome from './page-home.js'


document.addEventListener('DOMContentLoaded', function (){

    Layout.includeNav()
    Layout.setupTabs()

    Login.includeModalLogin()

    if(document.getElementById('CareHome')){
      // PageHome.setupHome()
      Booking.includeModalBooking()
      
    } 

    // jquery
    // $("#modalBooking").modal("show");
     

  }, false);

export * as Home from './page-home.js';  