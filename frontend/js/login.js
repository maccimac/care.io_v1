import * as Utils from './utils.js'

export const includeModalLogin = async () =>{
    document.getElementById('CareIOModalLogin').innerHTML = await Utils.getHtml('/frontend/modules/modal-login.html')
}