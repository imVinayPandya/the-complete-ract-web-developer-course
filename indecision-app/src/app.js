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


let count = 0;
// const someId = "myId";

const addOne = () => {
  console.log("Add one");
}

const minusOne = () => {
  console.log("minus one");
}

const reset = () => {
  console.log("Reset");
}

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
    {/* <button id={someId} className="button">+1</button> */}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);