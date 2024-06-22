import * as Styled from "./style";

type TypeTextArea = {
  value: string;
  handleChangeValue: (e: string) => void;
};
export default function TextArea({ value, handleChangeValue }: TypeTextArea) {
  return (
    <Styled.STextarea
      required
      maxRows={5}
      placeholder="Descrição *"
      minRows={5}
      value={value}
      onChange={(e) => handleChangeValue(e.target.value)}
    />
  );
}
