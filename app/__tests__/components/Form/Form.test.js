import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { RenderWithRedux } from '../../../utils/tests';
import Form from '../../../components/Form';
import TickersReducer, { initialState } from '../../../modules/Tickers/reducer';
import { addTicker } from '../../../modules/Tickers/actions';

const renderWithRedux = RenderWithRedux(
  { TickersReducer },
  { TickersReducer: initialState }
);

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('<Form />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should renders without crashing', () => {
    renderWithRedux(<Form />);
    expect(screen.getByTestId('form'));
    expect(screen.getByTestId('form-input'));
  });

  test('should change form input state after call change event', () => {
    renderWithRedux(<Form />);
    fireEvent.change(screen.getByTestId('form-input'), {
      target: { value: 'MSFT' },
    });
    expect(screen.getByTestId('form-input').getAttribute('value')).toBe('MSFT');
  });

  test('should clear form input after submit form', () => {
    renderWithRedux(<Form />);
    fireEvent.change(screen.getByTestId('form-input'), {
      target: { value: 'MSFT' },
    });
    fireEvent.submit(screen.getByTestId('form'));
    expect(screen.getByTestId('form-input').getAttribute('value')).toBe('');
  });

  test('should call dispatch function after submit form', () => {
    renderWithRedux(<Form />);
    fireEvent.change(screen.getByTestId('form-input'), {
      target: { value: 'MSFT' },
    });
    fireEvent.submit(screen.getByTestId('form'));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(addTicker({ name: 'MSFT' }));
  });

  test('should not call dispatch function after submit form if value is empty', () => {
    renderWithRedux(<Form />);
    fireEvent.change(screen.getByTestId('form-input'), {
      target: { value: '' },
    });
    fireEvent.submit(screen.getByTestId('form'));
    expect(mockDispatch).toHaveBeenCalledTimes(0);
  });
});
