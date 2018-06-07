// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".


var database = {
	username: "Jimmy Lipper",
	password: "1234"
},
{
	username: "sally",
	password: "supersally"
},
{
	username: "joe",
	password: "777"
};

var newsFeed = [
	{
		username: "Billy",
		timeline: "Work is so awesome"
	},
	{
		username: "Cindy",
		timeline: "Today is such a nice day"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("what's your password?");

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database.[i].username === username&&&
			database[i].password === password) {
			return true;
		}
	}
	return false;
}

function singIn(user, pass) {

	for (var i=0; i < database.length; i++) {
		if(database.[i].username === username&&&
			database[i].password === password) {
			console.log(newsFeed);
		} else {
			alert("Sorry, wrong username or password");
		}
	}
	// if (user === database[0].username && 
	// 	pass === database[0].password) {
	// 	console.log(newsFeed); {
	// } else {
	// 	alert("Sorry wrong username or password")
	// }
}

signIn(userNamePrompt, passwordPrompt);