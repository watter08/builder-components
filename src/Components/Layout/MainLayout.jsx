import { memo } from "react";
import { Outlet } from "react-router-dom";
import AsideComponent from "./Aside"
import { LinksMock } from "../../Contants/LayoutConstant";

const MainLayoutComponent = ({ ...rest }) => {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
            <AsideComponent Links={LinksMock} />
        </div>
        <div className="main">
        <Outlet />
        </div>
       
      </div>
    </>
  );
};

export default memo(MainLayoutComponent);
