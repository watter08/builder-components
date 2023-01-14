import { memo } from "react";
import { Outlet } from "react-router-dom";
import AsideComponent from "./Aside"
import { LinksMock } from "../../Contants/LayoutConstant";

const MainLayoutComponent = ({ ...rest }) => {
  return (
    <>
      <div class="wrapper">
        <div class="sidebar">
            <AsideComponent Links={LinksMock} />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default memo(MainLayoutComponent);
