import styled from "styled-components";

const FlexStyles = styled.div`
  width: 100%;
  display: flex;
  background-color: ${(props) => props.background || "#fff"};
  border-radius: ${(props) => props.radius || "6px"};
  padding: ${(props) => props.padding || "0px"};
  gap: ${(props) => props.gap || "0px"};
`;

const Flex = ({ children, background, radius, padding, gap }) => {
  return (
    <FlexStyles
      background={background}
      radius={radius}
      padding={padding}
      gap={gap}>
      {children}
    </FlexStyles>
  );
};

export default Flex;
