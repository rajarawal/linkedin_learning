let nums = [45,4,9,16,25]

let allOver18 = nums.every(myFun)

function myFun(value){
    return value > 18
}
console.log("The every element greater than 18 :"+allOver18)