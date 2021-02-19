const outerFunc=(a)=>{
	let b = 10;
	const innerFunc=()=>{
		let sum = a + b;
		console.log(`Sum = ${sum}`)
	}
	innerFunc();
}

outerFunc(5)