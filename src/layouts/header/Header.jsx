import { Link } from "react-router-dom";
import { Cart } from "../cart";
import { Search } from "../search";
import { User } from "../user";

const Header = () => {
  return (
    <div className="w-full h-[100px] flex items-center justify-between bg-cblue px-[60px] py-3 relative z-[9999]">
      <Link to="/">
        <img
          src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
          alt=""
          className="w-[60px] h-[40px]"
        />
      </Link>
      <div className="flex-1 flex flex-col gap-y-2">
        <div className="flex-1 flex items-center justify-center gap-x-5">
          <div className="flex-1 max-w-[746px]">
            <Search />
          </div>
          <User />
        </div>
      </div>
      <div className="">
        <Cart />
      </div>
    </div>
  );
};

export default Header;
