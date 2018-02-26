import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Frontpage from './Frontpage';
import Blog from './Blog';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Frontpage} />
      <Route exact path="/blog" component={Blog} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
