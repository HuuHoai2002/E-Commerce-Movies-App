const Heading = ({ title, onClick, className }) => {
  return (
    <h1
      className={`w-full flex items-center justify-center text-4xl text-cheading font-medium ${className}`}
      onClick={onClick}>
      {title && title}
    </h1>
  );
};

export default Heading;
