import React from 'react';
import ReactDOM from 'react-dom';
import TargetForm from './TargetForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TargetForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
