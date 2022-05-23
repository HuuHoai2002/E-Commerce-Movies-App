const Input = ({ title, placeholder, getValues, value }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => getValues(e.target.value)}
      className="w-full py-2 px-3 rounded-sm placeholder:text-sm"
      placeholder={placeholder || "Tìm bộ phim bạn mong muốn..."}
    />
  );
};

export default Input;
