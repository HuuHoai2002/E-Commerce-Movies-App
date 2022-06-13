import styled from "styled-components";

const ContainerStyles = styled.div`
  width: 100%;
  max-width: 1360px;
  height: 100%;
  min-height: ${(props) => props.minHeight || "100vh"};
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => props.background || props.theme.cbg};
  padding: ${(props) => props.py || "20px"} ${(props) => props.px || "60px"};
`;

const Container = ({ children, py, px, minHeight, background }) => {
  return (
    <ContainerStyles
      py={py}
      px={px}
      minHeight={minHeight}
      background={background}>
      {children}
    </ContainerStyles>
  );
};

export default Container;
