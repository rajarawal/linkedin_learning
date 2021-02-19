// It contains info about process

console.log(process.pid)
console.log(process.versions.node)
//console.log(process.argv) // give node path and current file path

const [,,firstName , lastName] = process.argv

console.log(`Your name is ${firstName} ${lastName}`)