import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('Detect div container in App', () => {
    render(<App/>);
    const paginationContainer = screen.queryByTestId('pagination-container');
    expect(paginationContainer).toBeTruthy();
});