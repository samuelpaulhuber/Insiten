import React from 'react';
import ReactDOM from 'react-dom';
import ViewTargets from './ViewTargets';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewTargets />, div);
  ReactDOM.unmountComponentAtNode(div);
});
