import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <label>
      <input
        type="text"
        name="filter"
        onChange={changeFilter}
      />
    </label>
    </>
  );
};


