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

var count = 0;
// const someId = "myId";

var addOne = function addOne() {
  count++;
  console.log("Add one", count);
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  console.log("minus one", count);
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  console.log("Reset", count);
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
