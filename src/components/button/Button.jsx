const Button = ({
  className = "",
  title = "",
  children,
  activeHover = false,
  activeBorder = false,
  onClick,
  to = "",
  ...props
}) => {
  return (
    <button
      className={`py-2 px-5 inline-flex items-center justify-center min-w-[150px] bg-cprice text-white font-medium min-h-[45px] rounded-sm transition-all ${
        activeHover && "hover:opacity-95"
      } ${
        activeBorder &&
        "border text-cprice !border-cprice hover:!bg-cprice hover:!text-white"
      } ${className}`}
      onClick={onClick}
      {...props}>
      <div className="flex items-center gap-x-1">
        {children && children}
        <div>{title && title}</div>
      </div>
    </button>
  );
};

export default Button;
