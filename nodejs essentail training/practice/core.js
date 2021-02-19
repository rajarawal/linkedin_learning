const path = require("path")
const util = require('util')
// const {log} = require('util') and directly use log
const v8 = require('v8')

const dirUpload = path.join(__dirname ,'www','files','uploads')

console.log(dirUpload)

util.log(path.basename(__filename))
util.log(" ^ Then name of the current file")

util.log(v8.getHeapStatistics())