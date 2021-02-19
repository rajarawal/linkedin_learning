let nums = [1,2,3,4,5,6,7,8]

let ans = nums.findIndex(myTest)

function myTest(value){
    return value % 2 == 0
}
console.log("First even element in array : "+ans)