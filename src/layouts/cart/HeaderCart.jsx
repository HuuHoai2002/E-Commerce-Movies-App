const HeaderCart = () => {
  const quantity = "5";
  return (
    <div className="text-white hover:opacity-90 cursor-pointer transition-all">
      <div className="flex items-center gap-x-2">
        <div className="relative">
          <img
            src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
            alt=""
            className="w-8 h-8"
          />
          {quantity && (
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center bg-cyellow text-black font-medium">
              {quantity || "0"}
            </div>
          )}
        </div>
        <div className="mt-auto">giỏ hàng</div>
      </div>
    </div>
  );
};

export default HeaderCart;
