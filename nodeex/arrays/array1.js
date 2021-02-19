var character = ['Raja','Aparna','Stuti','Subhangi','Hema']
let n = character.length

// for(let i = 0 ; i < n ; i++)
//     console.log(character[i])
character.push("King")
character.splice(2,0,"Kajal","Hero")
character.forEach(myFunction);

function myFunction(value){
    console.log(value)
}