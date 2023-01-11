import PropTypes from 'prop-types';
import { FilterInput } from './FilterContacts.styled';

export default function Filter({ value, onInput }) {
  return (
    <FilterInput>
      Find contacts by name
      <input type="text" name="key" value={value} required onChange={onInput} />
    </FilterInput>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
};
