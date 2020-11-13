import React from 'react';
import SelectIntervalDropdown from '../SelectIntervalDropdown/SelectIntervalDropdown';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

const intervals = [2, 5, 8, 10];

describe('SelectIntervalDropdown', () => {
    test('renders SelectIntervalDropdown component', async() => {
        render(<SelectIntervalDropdown intervals={intervals} />);
        const items = screen.getAllByRole('listitem');
        expect(items).toHaveLength(4);
        const listItem = screen.getAllByRole('listitem');
        userEvent.click(listItem[0]);
        expect(await screen.findByTestId('seconds')).toBeInTheDocument();
    });
});
