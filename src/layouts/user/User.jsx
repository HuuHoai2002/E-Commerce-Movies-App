import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import { routes } from "../../config/routes";
import { useGetAuth } from "../../hooks";
import { Href } from "../../layouts/components/href";
import { firebaseServices } from "../../services";
import UserDropdown from "./UserDropdown";

const User = () => {
  const { auth: user } = useGetAuth();
  const { signOutAccount } = firebaseServices();
  return (
    <div className="flex items-center gap-x-2 text-white">
      <div className="">
        <img
          src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
          alt=""
          className="w-8 h-8"
        />
      </div>
      <div className="flex-1">
        {user.is_login ? (
          <Tippy
            content={<UserDropdown onClick={signOutAccount} />}
            interactive={true}
            arrow={true}
            animation="scale">
            <div className="flex items-start flex-col gap-y-1 text-sm leading-none">
              <span className="text-xs">Tài Khoản</span>
              <span className="font-medium">{user.displayName}</span>
            </div>
          </Tippy>
        ) : (
          <Href to={routes.signin}>
            <div className="flex items-start flex-col gap-y-1 text-sm leading-none">
              <span className="text-xs">Đăng nhập/Đăng ký</span>
              <span className="font-medium">Tài khoản</span>
            </div>
          </Href>
        )}
      </div>
    </div>
  );
};

export default User;
