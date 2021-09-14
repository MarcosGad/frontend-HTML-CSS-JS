
/*
const x = function test(){

	console.log("Test function")
}

console.log(x.name) //name function = test

x(); // on fun

const y = () => {

	console.log("Arrow function")
}

console.log(y.name) //name function = y ale b3da al const

y(); // on fun

*/


/*
function test(){

	console.log(arguments)
}

test("hamza","code",1) // print arguments
*/




function car (params){

	this.type = params.type; 
	this.voice = params.voice; 

	setTimeout(function(){

		console.log(`function ${this.type}, ${this.voice}`) // hna ln ytb3a this l2nha l2 t3wod 3liha 

	} , 500)

	setTimeout( ()=> {

		console.log(`Arrow function ${this.type}, ${this.voice}`) 

	} , 500)
}


const car1 = new car({type:'bmw', voice:'123'}) // print

console.log(car1); // print























