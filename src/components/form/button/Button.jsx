import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Loading } from "../../loading";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0 25px;
  line-height: 1;
  border-radius: 4px;
  font-weight: 500;
  font-size: 18px;
  height: ${(props) => props.height || "55px"};
  color: white;
  display: flex;
  justify-content: center;
  transition: all 0.25s;
  align-items: center;
  background-color: ${(props) => props.theme.cprice};
  &:hover {
    opacity: ${(props) => (props.isLoading === true ? "" : "0.8")};
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
const Button = ({
  type = "button",
  onClick = () => {},
  children,
  kind = "primary",
  ...props
}) => {
  const { isLoading, to } = props;
  const child = !!isLoading ? <Loading className="border-white" /> : children;
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink
        to={to}
        style={{
          display: "inline-block",
        }}>
        <ButtonStyles type={type} kind={kind} {...props}>
          {child}
        </ButtonStyles>
      </NavLink>
    );
  }
  return (
    <ButtonStyles type={type} onClick={onClick} {...props} disabled={isLoading}>
      {child}
    </ButtonStyles>
  );
};

export default Button;
