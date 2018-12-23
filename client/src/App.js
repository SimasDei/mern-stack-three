/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

// Use appJS as a Route Dispatcher
const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
  </div>
);

export default App;
