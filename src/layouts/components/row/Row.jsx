import styled from "styled-components";

const RowStyles = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;
const Row = ({ children }) => {
  return <RowStyles>{children}</RowStyles>;
};

export default Row;
