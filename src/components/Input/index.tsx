import * as S from "./style";

type TypeInput = {
  label: string;
};
export default function Input({ label }: TypeInput) {
  return (
    <S.STextField
      required
      id="filled-required"
      label={label}
      variant="filled"
    />
  );
}
