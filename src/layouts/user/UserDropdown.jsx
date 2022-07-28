import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../components/icons/Logout";
import { routes } from "../../config/routes";

const UserDropdown = ({ onClick }) => {
  return (
    <div className="relative z-50 max-w-[250px] bg-white rounded-sm">
      <Link to={routes.completedOrders}>
        <div className="px-5 py-4 w-full rounded-sm text-ctext hover:bg-gray-200 hover:text-cblue transition-all">
          Đơn hàng đã thanh toán
        </div>
      </Link>
      <div
        className="px-5 py-4 w-full rounded-sm text-ctext flex items-center justify-start gap-2 hover:bg-gray-200 hover:text-cblue transition-all"
        onClick={onClick}>
        <Logout />
        Đăng xuất
      </div>
    </div>
  );
};

export default UserDropdown;
