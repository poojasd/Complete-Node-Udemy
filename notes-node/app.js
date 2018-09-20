console.log("Starting aap.js!");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

//console.log(_.isString(true));
//console.log(_.isString('fenix'));
var filteredArray = _.uniq(['fenix', 1, 'fenix', 2, 1, 3, 4]);
console.log(filteredArray);

var res = notes.add(9, -2);
console.log(res);
//var user = os.userInfo();

//fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);