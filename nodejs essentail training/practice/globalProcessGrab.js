// node <file name> --user Raja --greeting "King Rawal"

const grab=(flag)=>{
    let indexOfAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexOfAfterFlag];
}

const user = grab("--user")
const greeting = grab("--greeting")

console.log(`${greeting}  ${user}`)