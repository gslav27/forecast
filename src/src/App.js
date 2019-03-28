import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/HeaderLayout';
import Search from './containers/Search';
import Forecast from './containers/Forecast';
import RootStyle from './App.styles';



const App = () => (
  < >
    <RootStyle />
    <Header />
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Search} />
    </Switch>
    <Route path={`${process.env.PUBLIC_URL}/`} component={Forecast} />
  </>
);

export default App;
