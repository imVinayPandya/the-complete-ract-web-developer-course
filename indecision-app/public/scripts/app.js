'use strict';

console.log("App.js is running!");

// JSX - JavaScript XML
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer.',
  options: ['One', 'Two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title ? app.title : undefined
  ),
  React.createElement(
    'p',
    null,
    app.subtitle && app.subtitle
  ),
  React.createElement(
    'p',
    null,
    (app.options && app.options.length) > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Vinay Pandya',
  age: 18,
  location: 'Ahmedabad'
};

function getLocation(location) {
  if (!!location) {
    return React.createElement(
      'p',
      null,
      'location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Unknown'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
