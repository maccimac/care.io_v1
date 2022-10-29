import * as Config from './config.js'
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
      Booking.includeModalBooking()      
    } 

    Booking.getBookings()
    Booking.getSingleBooking(2)
    Booking.createBooking()
     

  }, false);

const apiTest = async  () =>{
  try{
    let username = 'root';
    let password = 'root';

    const res = await fetch(`${Config.HOST}/users`, {
        method: 'GET',
        credentials:'include',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Basic cm9vdDpyb290',
            'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            'Access-Control-Allow-Headers':'Content-Type,Authorization, X-Requested-With'
        }
        
    })
    console.log(res);
}catch(err){
    console.log(err.message)
}

}



  export * as Home from './page-home.js';  