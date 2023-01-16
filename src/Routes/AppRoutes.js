import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { GetUuId } from '../Libs/Helper';

import { LinksPagesMock } from "../Contants/LinksPageMock";



import MainComponent from '../Components/Layout/MainLayout';
const HomeComponent = React.lazy(() => import('../Pages/HomePage/HomeComponent'));
const ButtonsPageComponent = React.lazy(() => import('../Pages/FormsPages/ButtonsComponent'));
const FilterPageComponent = React.lazy(() => import('../Pages/FormsPages/FilterPageComponent'));
const CheckBoxPageComponent = React.lazy(() => import('../Pages/FormsPages/CheckBoxPage'));
const OthersPageComponent = React.lazy(() => import('../Pages/FormsPages/OthersComponent'));

function AppRoutes() {

  const Keys = {
    Home: GetUuId(),
    Buttons: GetUuId(),
    Filter: GetUuId(),
    CheckBoxes:GetUuId(),
    Others:GetUuId()
  }

  const [pagesKeys, setPagesKeys] = useState(Keys);

  return (
    <React.Suspense fallback={<span></span>}>
      <Routes>
        
          <Route element={<MainComponent />}>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<HomeComponent key={pagesKeys.Home} />} />
            <Route path={`${process.env.PUBLIC_URL}${LinksPagesMock.Forms.Filter}`} element={<FilterPageComponent key={pagesKeys.Filter} />} />
            <Route path={`${process.env.PUBLIC_URL}${LinksPagesMock.Forms.Buttons}`} element={<ButtonsPageComponent key={pagesKeys.Buttons} />} />
            <Route path={`${process.env.PUBLIC_URL}${LinksPagesMock.Forms.CheckBoxes}`} element={<CheckBoxPageComponent key={pagesKeys.CheckBoxes} />} />
            <Route path={`${process.env.PUBLIC_URL}${LinksPagesMock.Forms.Others}`} element={<OthersPageComponent key={pagesKeys.Others} />} />
          </Route>

      </Routes>

    </React.Suspense>
  );
}

export default AppRoutes;