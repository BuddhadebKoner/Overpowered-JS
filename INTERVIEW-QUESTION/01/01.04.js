variable = 10;

(() => {
   foo = 100;
   console.log(variable); // 10
   var foo = 100;
   variable = 20;
   console.log(variable); // 20
})(); // iffe

console.log(foo); // ReferenceError: foo is not defined
console.log(variable); // 20
var variable = 30;
console.log(variable); // 30


// only in memory phase variables are define those are in root level not in fundion level