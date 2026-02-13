var variable = 10;

(() => {
   console.log(variable); // 10

   variable = 20;

   console.log(variable); // 20
})(); // iffe

console.log(variable); // 20
var variable = 30;
console.log(variable); // 30