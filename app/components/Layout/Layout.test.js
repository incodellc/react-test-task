import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';

it('Layout component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Layout />, div);
    ReactDOM.unmountComponentAtNode(div);
});

