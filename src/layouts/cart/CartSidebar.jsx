import { Button } from "../../components/button";
import { routes } from "../../config/routes";
import { useToggle } from "../../hooks";
import { showToast } from "../../utils";
import { Href } from "../components/href";

const CartSidebar = ({
  userInfo,
  orders,
  onClick,
  totalPrice,
  isPayment = false,
}) => {
  const { displayName, email } = userInfo;
  const { open, handleToggle } = useToggle(false);
  return (
    <div className="w-full flex flex-col gap-y-4 sticky top-0 z-50">
      <div className="p-4 bg-white rounded-md">
        <div className="w-full">
          <div className="w-full flex items-center justify-between">
            <span className="font-medium text-base">Thông tin khách hàng</span>
            <span className="text-sm text-cblue cursor-pointer hover:opacity-80 transition-all">
              Thay đổi
            </span>
          </div>
          <div className="user mt-4">
            <div className="flex flex-col gap-y-1">
              <span className="text-sm text-ctext font-medium">
                Họ tên : <strong>{displayName}</strong>
              </span>
              <span className="text-sm text-ctext font-medium">
                Email : <strong>{email}</strong>
              </span>
              <span className="text-sm text-ctext font-medium">
                Số điện thoại :{" "}
                <span className="text-cblue cursor-pointer">Cập nhật ngay</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 bg-white rounded-md">
        <div className="flex items-center justify-between">
          <span className="font-medium text-sm">Tiki khuyến mãi</span>
          <span className="text-sm text-ctext">Có thể chọn 0</span>
        </div>
        <div
          className="flex items-center gap-x-2 cursor-pointer mt-10"
          onClick={() =>
            showToast("Bạn chưa có khuyến mại nào từ Tiki", false, true)
          }>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.2803 14.7803L14.7803 10.2803C15.0732 9.98744 15.0732 9.51256 14.7803 9.21967C14.4874 8.92678 14.0126 8.92678 13.7197 9.21967L9.21967 13.7197C8.92678 14.0126 8.92678 14.4874 9.21967 14.7803C9.51256 15.0732 9.98744 15.0732 10.2803 14.7803Z"
              fill="#0B74E5"></path>
            <path
              d="M10.125 10.5C10.7463 10.5 11.25 9.99632 11.25 9.375C11.25 8.75368 10.7463 8.25 10.125 8.25C9.50368 8.25 9 8.75368 9 9.375C9 9.99632 9.50368 10.5 10.125 10.5Z"
              fill="#0B74E5"></path>
            <path
              d="M15 14.625C15 15.2463 14.4963 15.75 13.875 15.75C13.2537 15.75 12.75 15.2463 12.75 14.625C12.75 14.0037 13.2537 13.5 13.875 13.5C14.4963 13.5 15 14.0037 15 14.625Z"
              fill="#0B74E5"></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.75 5.25C3.33579 5.25 3 5.58579 3 6V9.75C3 10.1642 3.33579 10.5 3.75 10.5C4.61079 10.5 5.25 11.1392 5.25 12C5.25 12.8608 4.61079 13.5 3.75 13.5C3.33579 13.5 3 13.8358 3 14.25V18C3 18.4142 3.33579 18.75 3.75 18.75H20.25C20.6642 18.75 21 18.4142 21 18V14.25C21 13.8358 20.6642 13.5 20.25 13.5C19.3892 13.5 18.75 12.8608 18.75 12C18.75 11.1392 19.3892 10.5 20.25 10.5C20.6642 10.5 21 10.1642 21 9.75V6C21 5.58579 20.6642 5.25 20.25 5.25H3.75ZM4.5 9.08983V6.75H19.5V9.08983C18.1882 9.41265 17.25 10.5709 17.25 12C17.25 13.4291 18.1882 14.5874 19.5 14.9102V17.25H4.5V14.9102C5.81181 14.5874 6.75 13.4291 6.75 12C6.75 10.5709 5.81181 9.41265 4.5 9.08983Z"
              fill="#0B74E5"></path>
          </svg>
          <span className="text-sm text-cblue">
            Chọn hoặc nhập Khuyến Mãi khác
          </span>
        </div>
      </div>
      <div className="bg-white rounded-md">
        <div className="w-full flex flex-col">
          {isPayment && (
            <div>
              <div className="w-full p-3 flex flex-col border-b border-cbg">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-base">Đơn hàng</span>
                  <Href to={`/${routes.cart}`}>
                    <span className="text-sm text-cblue cursor-pointer hover:opacity-80 transition-all">
                      Thay đổi
                    </span>
                  </Href>
                </div>
                <div className="flex items-center gap-x-2 mt-1">
                  <span className="text-sm text-ctext ">
                    {orders.length} sản phẩm.
                  </span>
                  <span
                    className="font-medium text-sm text-cblue cursor-pointer"
                    onClick={handleToggle}>
                    {open ? "Thu gọn" : "Xem thông tin"}
                  </span>
                </div>
              </div>
              {open && (
                <div className="w-full p-3 flex flex-col gap-y-2 border-b border-cbg transition-all">
                  {orders &&
                    orders.map((item) => (
                      <div className="flex items-center gap-x-3" key={item.id}>
                        <span className="shrink-0 text-sm font-medium">1x</span>
                        <span className="text-sm text-ctext leading-4 preview-cart-name-truncate">
                          {item.title || item.name}
                        </span>
                        <span className="shrink-0 text-sm font-medium ml-auto">
                          {item.price}
                        </span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          )}
          <div className="w-full p-3 flex flex-col gap-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm text-ctext opacity-80">
                Tạm tính{" "}
                <span className="text-sm">
                  {!isPayment && orders.length > 0
                    ? `(${orders.length} sản phẩm)`
                    : ""}
                </span>
              </span>
              <span className="text-sm text-ctext">{totalPrice}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm text-ctext opacity-80">
                Giảm giá
              </span>
              <span className="text-sm text-ctext">0đ</span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-cbg mb-3"></div>
          <div className="w-full">
            <div className="px-3 pb-3">
              <div className="flex items-center justify-between">
                <span className="font-medium text-black">Tổng tiền</span>
                <span className="text-xl text-cprice font-bold">
                  {totalPrice}
                </span>
              </div>
              {isPayment && (
                <div className="w-full mt-3">
                  <Button
                    className="!min-w-full !rounded-md hover:!opacity-80"
                    activeHover={true}
                    onClick={onClick}>
                    {!isPayment
                      ? `Mua Hàng (${orders.length > 0 ? orders.length : 0})`
                      : "Đặt Hàng"}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {!isPayment && (
        <div className="w-full">
          <Button
            className="!min-w-full !rounded-md hover:!opacity-80"
            activeHover={true}
            onClick={onClick}>
            {!isPayment
              ? `Mua Hàng (${orders.length > 0 ? orders.length : 0})`
              : "Đặt Hàng"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
