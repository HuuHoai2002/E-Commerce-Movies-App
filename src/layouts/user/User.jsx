const User = () => {
  return (
    <div className="flex items-center gap-x-2 text-white">
      <div className="">
        <img
          src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
          alt=""
          className="w-8 h-8"
        />
      </div>
      <div className="flex items-start flex-col gap-y-1 text-sm leading-none">
        <span className="text-xs">Tài Khoản</span>
        <span className="font-medium">Hữu Hoài</span>
      </div>
    </div>
  );
};

export default User;
