import * as Styled from "./style";
type HeaderList = {
  lengthTotal: number;
  lengthDoned: number;
};
export default function HeaderList({ lengthDoned, lengthTotal }: HeaderList) {
  return (
    <Styled.SContainer>
      <Styled.SHeaderTitleDescribe>
        <Styled.Sh2>Tarefas realizadas</Styled.Sh2>
        <Styled.Sp>mantenha o foco!</Styled.Sp>
      </Styled.SHeaderTitleDescribe>

      <Styled.SCircle>
        <Styled.Sh3>
          {lengthDoned}/{lengthTotal}
        </Styled.Sh3>
      </Styled.SCircle>
    </Styled.SContainer>
  );
}
