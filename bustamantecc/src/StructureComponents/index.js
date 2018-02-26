import React from 'react';

import './style.css';

const WrapperFlex = (props) => (
  <div className="wrapper__flex">
    {props.children}
  </div>
)

module.exports = {
  WrapperFlex
}
