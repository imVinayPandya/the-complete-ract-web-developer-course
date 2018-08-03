console.log("App.js is running!");

// JSX - JavaScript XML
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer.',
  options: ['One', 'Two']
};
const template = (
  <div>
    <h1>{app.title ? app.title : undefined}</h1>
    <p>{app.subtitle && app.subtitle}</p>
    <p>{(app.options && app.options.length) > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: 'Vinay Pandya',
  age: 18,
  location: 'Ahmedabad'
};

function getLocation(location) {
  if (!!location) {
    return <p>location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Unknown'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);