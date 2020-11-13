import React from 'react';
import List from '../List/List';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

const items = ['Test text 1', 'Test text 2'];

const mapedItems = items.map((el, i) => {
    return (
        <li key={i}>{el}</li>
    );
});

describe('List tests', () => {
    test('renders Details component', () => {
        render(
            <List items={mapedItems} />
        );

        expect(screen.getByTestId('list')).toBeInTheDocument();
        userEvent.click(screen.getByTestId('list'));
        expect(screen.getByTestId('list')).toHaveClass('list-visible');
        userEvent.click(screen.getByTestId('list'));
        expect(screen.getByTestId('list')).not.toHaveClass('list-visible');
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(2);
    });
});


