import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import PortfolioDetails from '../components/PortfolioDetails';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/portfolio" component={PortfolioPage} />
        <Route path="/portfolio/:id" component={PortfolioDetails} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
