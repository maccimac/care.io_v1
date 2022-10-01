import * as Config from './config.js'
import * as Utils from './utils.js'
import * as jq from './jquery.js'

export const includeModalBooking = async () =>{
    document.getElementById('CareIOModalBooking').innerHTML = await Utils.getHtml('/frontend/modules/modal-booking.html')
    jq.setupDatePicker()
    setupHoursDropdown()
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