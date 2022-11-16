import PropTypes from 'prop-types';
import {} from './Filter.styled';
import { nanoid } from 'nanoid';
import { InputCustom } from 'components/InputCustom/InputCustom';

export const Filter = ({ value, onChange }) => {
  const fildStyle = {
    'min-width': '50%',
  };
  const inputId = nanoid();

  return (
    <InputCustom
      fildStyle={fildStyle}
      inputId={inputId}
      name="filter"
      value={value}
      title="Filter by name"
      handleChangeInput={onChange}
    />
  );
};
