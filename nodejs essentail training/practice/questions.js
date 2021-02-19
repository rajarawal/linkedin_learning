const questions = [
    "What is your name",
    "What would you rather be doing ?",
    "What is your prefered programming langauge?"
]

const ask =(i=0)=>{
    process.stdout.write(`\n\n ${questions[i]}`)
    process.stdout.write("> ")
}

ask()

const answer =[]
process.stdin.on("data",data=>{
    answer.push(data.toString().trim());
    if(answer.length < questions.length)
        ask(answer.length)
    else{
        //process.stdout.write("Your anser : "+answer)
        process.exit()
    }
})

process.on("exit",()=>{
    const [name , activity , lang] = answer
    console.log(`
        Thank you for your answer .
        Go ${activity} ${name} you can write ${lang} later!!!
    `)
})
