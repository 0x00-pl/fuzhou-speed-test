let vm135 = require('./vm135.js')
let { Promise } = require('es6-promise')

function speed_test(){
    return new Promise((resolve, reject)=>{
        vm135.start((downSpeedArray, upSpeedArray, postData)=>resolve({
            downSpeedArray,
            upSpeedArray,
            postData
        }))
    })
}


function main(){
    speed_test().then(console.log)
}
