// concept of hoisting

myFunc();

var myFunc = function() {
   console.log("First");
}

myFunc();

function myFunc() { 
   console.log("Second");
};
myFunc();

// Second
// First
// First