import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Frontpage from './Frontpage';
import NotFound from './NotFound';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Frontpage} />
      <Route path="/test" component={NotFound} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
