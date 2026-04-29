import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler?: (e: React.ChangeEvent<HTMLInputElement>, ...args: any[]) => any;
  value?: boolean;
  label?: string;
}

const CheckboxInput = ({ handler, value, label }: Props) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={handler}
          checked={value}
          slotProps={{
            input: { 'aria-label': 'controlled' },
          }}
        />
      }
      label={label}
    />
  );
};

export default CheckboxInput;
