const Loading = ({ className }) => {
  return (
    <div
      className={`w-10 h-10 rounded-full border-2 border-cblue border-t-transparent transition-all animation-spin ${className}`}></div>
  );
};

export default Loading;
