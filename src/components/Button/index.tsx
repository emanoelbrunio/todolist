import * as Sytyled from "./style";

type TypeButtonCta = {
  title: string;
  active?: boolean;
  notBackground?: boolean;
  handleClick?: () => void;
};

export default function ButtonCta({
  title,
  active,
  notBackground,
  handleClick,
}: TypeButtonCta) {
  return (
    <Sytyled.MyButton
      active={active}
      notBackground={notBackground}
      onClick={handleClick}
    >
      {title}
    </Sytyled.MyButton>
  );
}
