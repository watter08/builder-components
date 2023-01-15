import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { GetUuId } from '../Libs/Helper';

import { LinksPagesMock } from "../Contants/LinksPageMock";



import MainComponent from '../Components/Layout/MainLayout';
const HomeComponent = React.lazy(() => import('../Pages/HomePage/HomeComponent'));
const ButtonsPageComponent = React.lazy(() => import('../Pages/FormsPages/ButtonsComponent'));
const FilterPageComponent = React.lazy(() => import('../Pages/FormsPages/FilterPageComponent'));


function AppRoutes() {

  const Keys = {
    Home: GetUuId(),
    Buttons: GetUuId(),
    Filter: GetUuId()
  }

  const [pagesKeys, setPagesKeys] = useState(Keys);

  return (
    <React.Suspense fallback={<span></span>}>
      <Routes>
        
          <Route element={<MainComponent />}>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<HomeComponent key={pagesKeys.Home} />} />
            <Route path={`${process.env.PUBLIC_URL}${LinksPagesMock.Forms.Filter}`} element={<FilterPageComponent key={pagesKeys.Filter} />} />
            <Route path={`${process.env.PUBLIC_URL}${LinksPagesMock.Forms.Buttons}`} element={<ButtonsPageComponent key={pagesKeys.Buttons} />} />
          </Route>

      </Routes>

    </React.Suspense>
  );
}

export default AppRoutes;