'use strict';

var usernameDb = "katie";
var passwordDb = "password";
var usernameInput = "katie";
var passwordInput = "password"

function checkLogin(usernameInput, passwordInput) {
  if(usernameInput === 'katie' && passwordInput === "password") {
  console.log("Login successful");
  return "login successful";
  }
  else {
    console.log("invalid login");
  }
};

checkLogin('katie' , 'password');
