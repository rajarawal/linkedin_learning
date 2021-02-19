

/* task 
	1. 2s get roll number 
	2. 2s get name and age 

*/

const promise_obj1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let roll_no = [1,2,3,4,5]
		// we successfully fatched roll no hence call resolve
		//resolve(roll_no)
		//not able to fatched data from API
		reject("Error while communicating with API")
	},2000)
})

promise_obj1.then((rollno)=>{
	console.log("We get roll no "+rollno)
}).catch((error)=>{
	console.log(error)
})