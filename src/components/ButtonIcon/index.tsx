import * as Styled from "./style";

type TypeButtonIcon = {
  children: React.ReactNode;
  handleClick: () => void;
  exit?: boolean;
  notBackground?: boolean;
};
export default function ButtonIcon({
  children,
  handleClick,
  exit,
  notBackground,
}: TypeButtonIcon) {
  return (
    <Styled.SButton
      onClick={handleClick}
      exit={exit}
      notBackground={notBackground}
    >
      {children}
    </Styled.SButton>
  );
}
