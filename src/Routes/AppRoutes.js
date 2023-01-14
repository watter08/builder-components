import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { GetUuId } from '../Libs/Helper';
import MainComponent from '../Components/Layout/MainLayout';


const HomeComponent = React.lazy(() => import('../Pages/HomePage/HomeComponent'));

function AppRoutes() {

  const Keys = {
    Home: GetUuId(),
    Dashboard: GetUuId(),
  }

  const [pagesKeys, setPagesKeys] = useState(Keys);

  return (
    <React.Suspense fallback={<span></span>}>
      <Routes>
        
          <Route element={<MainComponent />}>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<HomeComponent key={pagesKeys.Home} />} />
          </Route>

      </Routes>

    </React.Suspense>
  );
}

export default AppRoutes;