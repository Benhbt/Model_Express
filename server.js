// server.js
require('dotenv').config() // this line is mandatory when you want to read variables from the '.env' file 
console.log(`The server will run on port ${process.env.SERVER_PORT}`);
console.log(`The secret key ${process.env.SECRET_API_KEY} will be used to connect to the third party API`);
console.log(`I am "${process.env.MY_NAME}", wilder in "${process.env.MY_CITY}", and I love "${process.env.MY_LANGUAGE}"`);