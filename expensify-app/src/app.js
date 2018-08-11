import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
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
    404! <Link to="/" >Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

const routes = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route exact={true} path="/" component={ExpenseDashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));