import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    this is from my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    this is from my add expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    this is from my edit expense component
  </div>
);

const HelpPage = () => (
  <div>
    this is from my help component
  </div>
);

const NotFoundPage = () => (
  <div>
    404!
  </div>
);

const routes = (
  <Router>
    <Switch>
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route exact={true} path="/" component={ExpenseDashboardPage} />
      <Route component={NotFoundPage}/>
    </Switch>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));