const fs = require('fs');
const readlineSync = require('readline-sync');

// Read existing data from users.json
let fileData = fs.readFileSync('users.json');
let users = JSON.parse(fileData);

// Take input from the user
const name = readlineSync.question('Enter your name: ');
const email = readlineSync.question('Enter your email: ');
const phone = readlineSync.question('Enter your phone number: ');
const address = readlineSync.question('Enter your address: ');

// Create a new user object
const newUser = {
    name: name,
    email: email,
    phone: phone,
    address: address
};

// Add the new user to the existing users array
users.push(newUser);

// Convert users data to string
const newData = JSON.stringify(users, null, 2);

// Write the updated data back to the file
fs.writeFileSync('users.json', newData);

console.log('User added successfully.');
