import * as S from "./style";

type TypeButtonCta = {
  title: string;
  active: boolean;
};

export default function ButtonCta({ title, active }: TypeButtonCta) {
  return (
    <S.SLink to={"/Home"}>
      <S.MyButton variant="contained" active={active}>
        {title}
      </S.MyButton>
    </S.SLink>
  );
}
