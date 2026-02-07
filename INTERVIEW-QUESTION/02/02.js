// let user = {
//    name: "Gourab",
//    address: {
//       city: "Kolkata",
//    }
// }

// let shallowCopy = { ...user };

// user.address.city = "Bardhaman";
// user.name = "Buddhadeb";

// console.log("Main object", user.name, user.address.city);
// console.log("shallowCopy", shallowCopy, shallowCopy.address.city);


// deep copy


let user = {
   name: "Gourab",
   address: {
      city: "Kolkata",
   }
}

let shallowCopy = JSON.parse(JSON.stringify(user));

user.address.city = "Bardhaman";
user.name = "Buddhadeb";

console.log("Main object", user.name, user.address.city);
console.log("shallowCopy", shallowCopy, shallowCopy.address.city); 