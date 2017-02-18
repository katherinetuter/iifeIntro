console.log("hello");

var outside = "global";

function scopeStuff(){
	var inside = "local";
	// console.log("outside from inside the function", outside); //global
	// console.log("inside from inside the function", inside);   //local
}

console.log("outside from outside the function", outside);//global
//console.log("inside from outside the function", inside); //undefined
//scopeStuff();

//1 way to make a variable private is to put it in a function

var global_base = 500;
(function throwAway(){
	global_base+=500;
	console.log(global_base);
})();

//function expression-
//var x = function(){};


var cats = (function(){
	var color = "black";
	var type = "tiger";
	var name = "fluffy"; //since there is no function about fluffy below fluffy variable will always be private and unable to be seen by people in browser. you have to use return to make a variable's/function's output show to people

	return {
		getColor : function(){
			var result = "your cat is " + color;
			return result;
		},
		getType : function(){
			return type;
		},
		setColor : function(newColor){
			color = newColor;
		}
	};
})();

//return pulls whatever you return outside of the function
//to write a function inside an object use a : instead of a = example:
// var object = {
	// getBlah = function(){
// 	return blah;
// }
//}
console.log(cats); //example: console.log(cats.color); undefined because it is a private variable beacuse it is inside the iife

//function declaration- 
//function(){};

//throwAway(); //calls the function

//document.getElementById("cat").addEventListener("click", throwAway); //references the function to be run when you click the button





