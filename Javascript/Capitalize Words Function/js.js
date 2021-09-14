/*

'Elzero web school'.split('')
(17) ["E", "l", "z", "e", "r", "o", " ", "w", "e", "b", " ", "s", "c", "h", "o", "o", "l"]

'Elzero web school'.split(' ')
(3) ["Elzero", "web", "school"]

'Elzero'.charAt(0)
"E"

'elzero'.charAt(0).toUpperCase()
"E"

'elzero'.slice(1)
"lzero"

*/

function capitalizeletters(string){

	var oldArray = string.split(' '),
	newArray = []; 

	//newArray.push(oldArray[0].charAt(0).toUpperCase() + oldArray[0].slice(1));

	for (var i = 0; i < oldArray.length; i++){

		newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));
	} 


	return newArray.join(' '); 
}


console.log(capitalizeletters('elzero web school')); 

