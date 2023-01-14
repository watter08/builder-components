import { memo } from "react";
import { Outlet } from "react-router-dom";
import AsideComponent from "./Aside"

const MainLayoutComponent = ({ ...rest }) => {
  return (
    <>
      <div class="wrapper">
        <div class="sidebar">
            <AsideComponent />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default memo(MainLayoutComponent);
