const waitTime = 5000 // 5 second
const waitInterval = 500
let currentTime = 0

const incTime  = () =>{
    currentTime += waitInterval
    const p = Math.floor((currentTime / waitTime) *100)
    process.stdout.clearLine() // clear cmd
    process.stdout.cursorTo(0) // bring cursor at 0 or begining
    process.stdout.write(`Waiting....${p}%`)
}


console.log(`Setting a ${waitTime / 1000} seconds`)

const timerFinished=()=> {
    clearInterval(interval)
    process.stdout.clearLine() // clear cmd
    process.stdout.cursorTo(0)
    console.log("Done")
}
const interval = setInterval(incTime , waitInterval)
setTimeout(timerFinished , waitTime)
