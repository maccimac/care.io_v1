import * as Config from './config.js'
import * as Utils from './utils.js'

export const includeModalLogin = async () =>{
    document.getElementById('CareIOModalLogin').innerHTML = await Utils.getHtml('/frontend/modules/modal-login.html')

    // document.querySelector('#CareNav button#LaunchLogin').addEventListener('click', generateToken)

    document.querySelector('#CareIOModalLogin #submitLogin').addEventListener(
        'click', onSubmit
    )
}

const generateToken = async () => {
    try{
        const res = await fetch(`${Config.HOST}/hello`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
            }
            
        })
        console.log(res);
    }catch(err){
        console.log(err.message)
    }
}

const onSubmit = async (evt) => {
    evt.preventDefault()
    const userString = document.querySelector('#CareIOModalLogin #inputUsername').value
    const pwString = document.querySelector('#CareIOModalLogin #inputPassword').value
    console.log({userString, pwString})
    try{
        const res = await fetch(`${Config.HOST}/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
            },
            body:{
                user: userString,
                password: pwString
            }
            
        })
        console.log(res);
    }catch(err){
        console.log(err.message)
    }
    
}