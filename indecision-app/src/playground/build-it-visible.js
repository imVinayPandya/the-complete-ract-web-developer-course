console.log("App.js is running!");

// JSX - JavaScript XML
const app = {
  title: 'Visibility Toggle',
  subtitle: 'Put your life in the hands of a computer.',
  showDetails: false
};

const onShowDetails = () => {
  app.showDetails = !app.showDetails;
  renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {

  const template = (
    <div>
      <h1>{app.title ? app.title : undefined}</h1>
      <button onClick={onShowDetails}>
      {
        app.showDetails ? 'Hide Details' : 'Show Details' 
      }
      </button>
      {
        app.showDetails ? <p>{app.subtitle && app.subtitle}</p> : null
      }
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();