import * as Config from './config.js'
import * as Utils from './utils.js'
import * as jq from './jquery.js'

export const includeModalBooking = async () =>{
    document.getElementById('CareIOModalBooking').innerHTML = await Utils.getHtml('/frontend/modules/modal-booking.html')
    jq.setupDatePicker()
}
