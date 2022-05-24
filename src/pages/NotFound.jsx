import { useNavigate } from "react-router-dom";

import { Heading } from "../components/heading";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="h-screen flex items-center flex-col justify-center">
        <Heading title="Trang này không tồn tại" />
        <button className="px-5 py-3 mt-10 rounded-md font-medium bg-transparent border border-cprice hover:text-white hover:bg-cprice transition-all" onClick={() => navigate("/")}>
          Ấn vào đây để về trang chủ
        </button>
      </div>
    </div>
  );
};

export default NotFound;
