import styled from "styled-components";

const ViewStyles = styled.div`
  width: 100%;
  height: 100%;
`;

const View = ({ children }) => {
  return <ViewStyles>{children}</ViewStyles>;
};

export default View;
