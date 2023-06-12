import { styled } from '@mui/system';
import Select from '@mui/material/Select';

export const getStyles = (name, teamName, theme) => {
  return {
    fontWeight:
      teamName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const CustomSelect = styled(Select)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'green',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1795A8',
    },
  },
});