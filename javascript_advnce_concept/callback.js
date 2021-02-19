/*
	task :
		1. in 2s get roll no.
		2. in 2s get name and age of particular rollno.
		3. in 2s get gender
*/

const getRollNumeber=()=>{
	setTimeout(()=>{
		console.log("API gettting rollno.")
		let rollno = [1,2,3,4,5]
		setTimeout((roll)=>{
			const biodata = {
				Name:"Raja Rawal",
				Age : 26
			}
			console.log(`My rollno is ${roll} . my name is ${biodata.Name} and i am ${biodata.Age} year old.`)
			setTimeout((name)=>{
				biodata.gender = 'Male'
				console.log(`My rollno is ${roll} . my name is ${biodata.Name} and i am ${biodata.Age} year old. Gender ${biodata.gender}`)
			},2000,biodata.name)
		},2000,rollno[1])
	},2000)
}
console.log("I call getRollNumeber for gettting rollno")
getRollNumeber()