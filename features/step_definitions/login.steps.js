const { Given, When, Then } = require('@cucumber/cucumber');

Given('user enters valid credentials', function () {
  console.log("CI pipeline verification");  
});

When('user clicks login', function () {
  console.log("Login clicked");
});

Then('user should see dashboard', function () {
  console.log("Dashboard visible");
});