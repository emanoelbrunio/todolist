import * as Styled from "./style";

type TypeInput = {
  label: string;
  value: string;
  handleChangeValue: (e: string) => void;
};

export default function Input({ label, value, handleChangeValue }: TypeInput) {
  return (
    <Styled.STextField
      required
      id="filled-required"
      label={label}
      variant="filled"
      value={value}
      onChange={(e) => handleChangeValue(e.target.value)}
    />
  );
}
