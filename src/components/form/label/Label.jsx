const Label = ({ children, htmlFor, onClick, className, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      onClick={onClick}
      className={`cursor-pointer text-ctext ${className}`}>
      {children}
    </label>
  );
};

export default Label;
