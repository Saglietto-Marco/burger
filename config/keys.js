require("dotenv").config();

console.log('this is loaded');

exports.mysqlKey = {
  mySQL_password: process.env.password
};
