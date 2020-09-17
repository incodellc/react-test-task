import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTicker } from '../../modules/Tickers/actions';

const Form = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleChangeValue = (e) => setValue(e.target.value);
  const handleAddTicker = (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      dispatch(addTicker({ name: value }));
      setValue('');
    }
  };

  return (
    <form data-testid="form" onSubmit={handleAddTicker}>
      <input
        data-testid="form-input"
        className="w-full px-5 py-3 rounded-lg shadow-lg"
        type="text"
        placeholder="Enter stock ticker name and press [ENTER] to add it on the board"
        value={value}
        onChange={handleChangeValue}
      />
    </form>
  );
};

export default Form;
