const outerFunc=(a)=>{
	let b = 10;
	const innerFunc=()=>{
		let sum = a + b;
		console.log(`Sum = ${sum}`)
	}
	return innerFunc;
}

const inner = outerFunc(5)

console.dir(inner)

inner();