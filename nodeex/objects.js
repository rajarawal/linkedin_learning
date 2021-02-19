var person ={
    firstName:'Raja',
    lastName:'Rawal',
    id:19602748,
    fullName: function(){return this.firstName +" "+this.lastName},
    getDetails :function(){ return this.firstName+" "+this.lastName+" "+this.id}
}

console.log(person.fullName())
console.log(person.getDetails())