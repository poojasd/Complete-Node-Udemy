console.log("Starting aap.js!");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.add(9, -2);
console.log(res);
//var user = os.userInfo();

//fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);