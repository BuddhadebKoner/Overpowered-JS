for (let i = 0; i < 10; i++) {
   setTimeout(() => console.log(i), 0);
}

// settime out runs with block scope of loop and it will print 0 to 9

for (var i = 0; i < 10; i++) {
   setTimeout(() => console.log(i), 0);
}

// settime out runs after loop is finished and it will print 10 ten times