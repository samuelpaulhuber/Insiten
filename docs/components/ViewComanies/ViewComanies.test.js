import React from 'react';
import ReactDOM from 'react-dom';
import ViewCompanies from './ViewCompanies';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewCompanies />, div);
  ReactDOM.unmountComponentAtNode(div);
});
