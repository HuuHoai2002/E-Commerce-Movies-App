const Image = ({ src = "", rounded = "", className, maxHeight = "" }) => {
  return (
    <div className={`image ${maxHeight}`}>
      <img
        src={src}
        alt=""
        className={`w-full h-full object-cover ${
          rounded || "rounded-lg"
        } ${className}`}
      />
    </div>
  );
};

export default Image;
