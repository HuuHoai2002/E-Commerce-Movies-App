// import { toast } from "react-toastify";

const QuantityInput = ({
  title = "Số lượng",
  values = 1,
  setValues,
  disabledSelect = false,
  heading = true,
  onClick = () => {},
}) => {
  // const handleClick = () => {
  //   if (disabledSelect) {
  //     toast.error("Bạn chỉ có thể chọn 1 sản phẩm");
  //   }
  // };
  const handleChange = (e) => {
    if (!disabledSelect) {
      setValues(parseInt(e.target.value) || "");
    } else {
      return;
    }
  };
  return (
    <div className="" onClick={onClick}>
      <div className="flex flex-col gap-y-3">
        {heading && (
          <span className="text-[15px] leading-5 font-medium">{title}</span>
        )}
        <div className="flex items-center gap-x-0">
          <button
            className={`flex items-center justify-center w-8 h-[30px] border border-[#ececec] border-r-transparent rounded-tl-[4px] rounded-bl-[4px] hover:bg-cbg ${
              !values ||
              (values === 1 && "cursor-default opacity-50 hover:bg-white")
            }`}
            onClick={() => setValues((prev) => prev - 1)}
            disabled={!values || values === 1}>
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
              alt="remove-icon"
              width="20"
              height="20"
            />
          </button>
          <input
            type="text"
            className="w-10 h-[30px] border border-[#ececec] outline-none text-center focus:border-cblue"
            value={disabledSelect ? 1 : values}
            onChange={handleChange}
            min={1}
            disabled={disabledSelect}
          />
          <button
            className={`flex items-center justify-center w-8 h-[30px] border border-[#ececec] border-l-transparent rounded-tr-[4px] rounded-br-[4px] hover:bg-cbg ${
              disabledSelect && "cursor-default opacity-50 hover:bg-white"
            }`}
            onClick={() => setValues((prev) => prev + 1)}
            disabled={disabledSelect}>
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
              alt="add-icon"
              width="20"
              height="20"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityInput;
