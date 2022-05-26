import styled from "styled-components";

const ContainerStyles = styled.div`
  width: 100%;
  height: 100%;
  min-height: ${(props) => props.minHeight || "100vh"};
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => props.theme.cbg};
  padding: ${(props) => props.py || "20px"} ${(props) => props.px || "60px"};
`;

const Container = ({ children, py, px, minHeight }) => {
  return (
    <ContainerStyles py={py} px={px} minHeight={minHeight}>
      {children}
    </ContainerStyles>
  );
};

export default Container;
