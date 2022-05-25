import { Link } from "react-router-dom";

const Href = ({ children, to }) => {
  return <Link to={to}>{children}</Link>;
};

export default Href;
