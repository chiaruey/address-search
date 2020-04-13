import React from 'react';
import ReactDOM from 'react-dom';
import SimpleMapApp from './simpleMapApp';
import StoreProvider from './store';

require('dotenv').config();

const requiredKeys = [
  'REACT_APP_ENV',
  'REACT_APP_GOOGLE_API_KEY'
];
requiredKeys.forEach((key) => {
  if (!process.env[key]) {
    console.error(`${key} env variable was not set  ` + process.env[key]);
  }
});

ReactDOM.render(
  <StoreProvider>
    <React.Fragment>
      <SimpleMapApp />
    </React.Fragment>
  </StoreProvider>,

  document.getElementById('root')
);
