import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../components/organisms/Header';
import Home from '../components/organisms/Home';
import Search from '../components/organisms/Search';

const Routes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact={true} component={Home} />
        <Route path="/search" exact={true} component={Search} />
      </Router>
    </div>
  );
};

export default Routes;
