import React from 'react';
import { InfoBar } from '../../../components';
import { cleanup, render } from '@testing-library/react';

describe('Check InfoBar component', () => {
    afterEach(cleanup);

    it('component renders correctly', () => {
        const { asFragment } = render(<InfoBar />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('component should have correct content', () => {
        const { getByText } = render(<InfoBar />);
        expect(getByText('Kirill Kopitsa')).toBeInTheDocument();
        expect(getByText('Dnipro, Ukraine')).toBeInTheDocument();
        expect(getByText('joseff.knecht@gmail.com')).toBeInTheDocument();
        expect(getByText('github.com/joseffone')).toBeInTheDocument();
        expect(getByText('This site is a solution of the test task from InCode Group.')).toBeInTheDocument();
    });
});