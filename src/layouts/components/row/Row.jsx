import styled from "styled-components";

const RowStyles = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.radius || "6px"};
`;
const Row = ({ children, radius }) => {
  return <RowStyles radius={radius}>{children}</RowStyles>;
};

export default Row;
