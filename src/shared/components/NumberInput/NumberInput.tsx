import style from './NumberInput.module.css';
interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: (e: React.ChangeEvent<HTMLInputElement>, ...args: any[]) => any;
  value: number;
  label: string;
  min?: number;
  max?: number;
}
const NumberInput = ({ handler, value, label, min, max }: Props) => {
  return (
    <div className={style.numberInput}>
      <label htmlFor="basic-input">{label}</label>

      <input
        id="basic-input"
        type="number"
        value={value}
        min={min ?? undefined}
        max={max ?? undefined}
        aria-invalid={false}
        onChange={handler}
      />
    </div>
  );
};

export default NumberInput;
