import { Fragment } from "react";
import { routes } from "../../config/routes";
import { Href } from "../components/href";

const HeaderDefault = ({ title = "", children }) => {
  return (
    <Fragment>
      <div className="w-full h-[100px] flex items-center justify-center bg-white px-[60px] py-3 relative z-[9999]">
        <div className="w-full flex max-w-[1240px]">
          <Href to={routes.home}>
            <img
              src="https://salt.tikicdn.com/ts/upload/1c/11/e6/d8211526b5bdc67aaaef2af9e8cf7dc8.png"
              alt="icon"
              width="60"
              height="40"
            />
          </Href>
          <span className="w-[1px] h-[32px] bg-cblue mx-4 mt-auto"></span>
          <span className="mt-auto font-medium text-2xl text-cblue">
            {title.toLocaleUpperCase()}
          </span>
        </div>
      </div>
      {children}
    </Fragment>
  );
};

export default HeaderDefault;
