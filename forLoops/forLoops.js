var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

var todosLength = todos.length;
//for (var i=0; i < todos.length; i++) {
//	todos.pop();
//}


//Counting up 
var counterOne = 0;
while (counterOne < 10) {
	console.log(counterOne);
	counterOne++
}

//Counting Down
var counterOne = 10;
while (counterOne > 0) {
	console.log(counterOne);
	counterOne--


//Do while loop.
var counterTwo = 10
do {
	console.log(counterTwo);
	counterTwo--;
} while (counterTwo > 0);

//forEach
todos.forEach(function(i) {
	console.log(i);
})

//for Each, another example:
todos.forEach(function(todo, i) {
	console.log(todo, i);
})

//forEach, can also create function outside of forEach
// so function can be called by other arrays.
function logTodos(todos, i) {
	console.log(todo, i);
}
todos.forEach(logTodos);


