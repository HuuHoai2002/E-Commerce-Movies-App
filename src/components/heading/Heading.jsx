const Heading = ({ title, onClick, className, isCenter = true }) => {
  return (
    <h1
      className={`w-full flex items-center ${
        isCenter ? "justify-center" : "justify-start"
      } text-4xl text-cheading font-medium ${className}`}
      onClick={onClick}>
      {title && title}
    </h1>
  );
};

export default Heading;
