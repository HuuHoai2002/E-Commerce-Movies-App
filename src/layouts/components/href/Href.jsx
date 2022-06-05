import { Link } from "react-router-dom";

const Href = ({ children, to, className }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default Href;
