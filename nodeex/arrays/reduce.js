var numbers1 = [45, 4, 9, 16, 25];

var ans = numbers1.reduce(myReduce)

function myReduce(total , value , index , array){
    return total + value
}

console.log("Sum of array : "+ans)