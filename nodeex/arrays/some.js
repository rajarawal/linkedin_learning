let nums = [45,4,9,16,25]

let anyOver18 = nums.some(myFun)

function myFun(value){
    return value > 18
}
console.log("The every element greater than 18 :"+anyOver18)