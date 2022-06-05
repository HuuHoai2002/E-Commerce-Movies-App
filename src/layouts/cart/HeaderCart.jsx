import { routes } from "../../config/routes";
import { useGetAuth, useGetDataWithUserId } from "../../hooks";
import { Href } from "../components/href";

const HeaderCart = () => {
  const { data } = useGetDataWithUserId("cart");
  const { auth } = useGetAuth();
  return (
    <Href to={`/${routes.cart}`}>
      <div className="text-white hover:opacity-90 cursor-pointer transition-all">
        <div className="flex items-center gap-x-2">
          <div className="relative">
            <img
              src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
              alt=""
              className="w-8 h-8"
            />
            {auth.is_login && data && (
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center bg-cyellow text-black font-medium">
                {data?.orders?.items?.length || "0"}
              </div>
            )}
          </div>
        </div>
      </div>
    </Href>
  );
};

export default HeaderCart;
