import * as Config from './config.js'
import * as Utils from './utils.js'
import * as jq from './jquery.js'

export const includeModalBooking = async () =>{
    document.getElementById('CareIOModalBooking').innerHTML = await Utils.getHtml('/frontend/modules/modal-booking.html')
    jq.setupDatePicker()
    setupHoursDropdown()
    document.getElementById('CareIOModalBooking').addEventListener('click', (evt) =>{
        evt.preventDefault()
        getBookings()
    })
}

const operatingHours = [
    { label: '6 am', val: '06:00'},
    { label: '7 am', val: '07:00'},
    { label: '8 am', val: '08:00'},
    { label: '9 am', val: '09:00'},
    { label: '10 am', val: '10:00'},
    { label: '11 am', val: '11:00'},
    { label: '12 nn', val: '12:00'},
    { label: '1 pm', val: '13:00'},
    { label: '2 pm', val: '14:00'},
    { label: '3 pm', val: '15:00'},
    { label: '4 pm', val: '16:00'},
    { label: '5 pm', val: '17:00'},
    { label: '6 pm', val: '18:00'},
    { label: '7 pm', val: '19:00'},
    { label: '8 pm', val: '20:00'},
    { label: '9 pm', val: '21:00'},
    { label: '10 pm', val: '22:00'},
]

export const setupHoursDropdown = () => {
    const dropdownStartHrs = document.getElementById('inputStartTime')
    const dropdownEndHrs = document.getElementById('inputEndTime')
    if(!dropdownStartHrs | !dropdownEndHrs) return

    let htmlOptionsStart = ""
    let htmlOptionsEnd = ""

    operatingHours.map((timeObj, i) => {
        const strOpt = `<option value="${timeObj.val}" class="time-opts time-${i+6}" data-index="${i}">
            ${timeObj.label}
        </option>`

        if(i< (operatingHours.length-2)){
            htmlOptionsStart += strOpt
        }
        if(i>1){
            htmlOptionsEnd += strOpt
        }
        
    });
    dropdownStartHrs.innerHTML = htmlOptionsStart
    dropdownEndHrs.innerHTML = htmlOptionsEnd

    dropdownStartHrs.addEventListener('input', evt =>{
        const valIndex = evt.target.selectedOptions[0].dataset.index

        const endHrs = dropdownEndHrs.children
        endHrs[valIndex].selected = true;
        for (let i = 0; i < endHrs.length; i++) {
            if(i < valIndex){
                endHrs[i].disabled = true
            }else{
                endHrs[i].disabled = false
            }
        }

    })
}

export const updateEndHrOpts = () => {

}

export const sampleFetchTest = () => {
    console.log("This functioon demonstrates that the files is able to fetch from other servers")

    const update = {
        title: 'A blog post by Kingsley',
        body: 'Brilliant post on fetch API',
        userId: 1,
    };
    
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    };

    fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(data => {
        if (!data.ok) {
            throw Error(data.status);
        }
        return data.json();
        }).then(update => {
            console.log(update);
        }).catch(e => {
            console.log(e);
        });
}

export const getBookings = (evt) => {
    console.log('getBookings')

    try{
        fetch(`${Config.HOST}/booking`, {
            method: 'GET',
            credentials:'include',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization' : "Basic cm9vdDpyb290",
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
            },
            json: true 
        }).then(res=>{
            console.log(res)
            return res.json()
        }).then( data => {
            console.log({data})
        })
        
        // const res = await fetch(`${Config.HOST}/booking`, {
        //     method: 'GET',
        //     mode: 'no-cors',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
        //         'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
        //     }  
        // })
        // console.log(res);
        // console.log(res.body)

    }catch(err){
        console.log("error message", err.message)
    }
}

export const getSingleBooking = async (bookingId) =>{
        console.log('getSingleBooking') 
        try{
            const res = await fetch(`${Config.HOST}/booking?1`, {
                method: 'GET',
                credentials:'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization' : "Basic cm9vdDpyb290",
                    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
                } ,
                // body:{
                //     'bookingId': bookingId
                // }  
            })
            console.log(res);
            console.log(res.body);
            // console.log(res.json());
        }catch(err){
            console.log("error message", err.message)
        }

    /* 
        try{
            fetch(`${Config.HOST}/booking`, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
                },
                body:{
                    bookingId: bookingId
                }  
            }).then(res=>{
                return res.json()
            }).then( data => {
                console.log(data)
            })
        }catch(err){
            console.log("error message", err.message)
        }
    */
}