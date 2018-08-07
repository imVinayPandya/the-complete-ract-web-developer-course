console.log("App.js is running!");

// JSX - JavaScript XML
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer.',
  options: []
};

const onRemoveAll = (e) => {
  e.preventDefault();
  app.options = [];

  renderApp();
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (!!option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const appRoot = document.getElementById('app');

const numbers = [10, 20, 30, 40, 50];

const renderApp = () => {

  const template = (
    <div>
      <h1>{app.title ? app.title : undefined}</h1>
      <p>{app.subtitle && app.subtitle}</p>
      <p>{(app.options && app.options.length) > 0 ? 'Here are your options' : 'No options'}</p>
      <p>
        {app.options.length}
      </p>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
      {
        app.options.map((item) => {
          return <li key={item}>{item}</li>;
        })
      }
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();