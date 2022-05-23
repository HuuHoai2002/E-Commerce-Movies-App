import styled from "styled-components";

const WrapperStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${(props) => props.gap || "20px"};
`;
const Wrapper = ({ children, gap }) => {
  return <WrapperStyles gap={gap}>{children}</WrapperStyles>;
};

export default Wrapper;
