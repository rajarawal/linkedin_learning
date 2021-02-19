var points = [1,2,3,8,1,5,10]

var ans = points.map(myFun)

function myFun(value , index , array){
    return value*2
}

for(let i = 0 ; i < ans.length ; i++)
    console.log(ans[i])

console.log("Filter example")
let number = [45,4,9,16,25]
let over18 = number.filter(
    function myFilt(value){return value > 18}
)
for(let i = 0 ; i < over18.length ; i++)
    console.log(over18[i])

