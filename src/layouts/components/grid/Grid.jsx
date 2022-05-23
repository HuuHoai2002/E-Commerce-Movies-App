import styled from "styled-components";

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col || 6}, 1fr);
  grid-gap: ${(props) => props.gap || 0}; ;
`;

const Grid = ({ children, gap, col }) => {
  return (
    <GridStyles gap={gap} col={col}>
      {children}
    </GridStyles>
  );
};

export default Grid;
