import styled from "styled-components";

const ViewStyles = styled.div`
  width: 100%;
  max-width: ${(props) => props.maxWidth};
`;

const View = ({ children, maxWidth }) => {
  return <ViewStyles maxWidth={maxWidth}>{children}</ViewStyles>;
};

export default View;
