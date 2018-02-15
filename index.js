let vm135 = require('./vm135.js')
let { Promise } = require('es6-promise')
let process = require('process')

function speed_test(site_index){
    return new Promise((resolve, reject)=>{
        vm135.start(site_index, (err, downSpeedArray, upSpeedArray, postData)=>{
            if(err) { reject(err) }
            else {
                resolve({
                    downSpeedArray,
                    upSpeedArray,
                    postData
                })
            }
        })
    })
}


function main(){
    speed_test(0).then(console.log)
}

if (require.main === module) {
    speed_test(process.argv[2])
}

module.exports = speed_test
