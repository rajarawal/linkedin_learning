/* task 
	1. 2s get roll number 
	2. 2s get name and age 
*/

const promise_obj1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let roll_no = [1,2,3,4,5]
		// we successfully fatched roll no hence call resolve
		resolve(roll_no)
	},2000)
})

// geting name and age
const getBiodata = (indexrollno)=>{
	return new Promise((resolve , reject)=>{
		setTimeout((indexrollno)=>{
		let biodata={
			name:'King Rawal',
			age : 26
		}
		resolve(`My name is ${biodata.name} , rollno ${indexrollno} and age ${biodata.age}`)
	},2000,indexrollno)
	})
}
promise_obj1.then((rollno)=>{
	console.log("We get roll no "+rollno);
	return getBiodata(rollno)
}).then((msg)=>{
		console.log(msg)
	})