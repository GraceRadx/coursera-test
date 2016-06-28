// Arrays
// var array = new Array();
// array[0] = "Grace";
// array[1] = 2;
// array[2] = function (name) {
// 	console.log("Hello " + name);
// };
// array[3] = {course: " HTML, CSS & JS"};

// console.log(array);
// array[2] (array[0]);
// console.log(array[3].course);

// Short hand array creation
// var names = ["Grace", "Rebecca", "Shea"]
// //console.log(names);

// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " + names[i]);
// }


// names[100] = "Shea";
// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " + names[i]);
// }


var names2 = ["Grace", "Rebecca", "Shea"]

//  var myObj = {
//  	name: "Grace",
//  	course: "HTML/CSS/JS",
//  	platform: "coursera"
//  };
// for (var prop in myObj) {
// 	console.log(prop + ": " + myObj[prop]);
// }
for (var name in names2) {
	console.log("Hello " + names2[name]);
}

names2.greeting = "Hi!";

for (var name in names2) {
	console.log("Hello " + names2[name]);
}

