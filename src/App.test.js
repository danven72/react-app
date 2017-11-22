import React from 'react';
import ReactDOM from 'react-dom';
import HelloPanel from './HelloPanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HelloPanel />, div);
});
