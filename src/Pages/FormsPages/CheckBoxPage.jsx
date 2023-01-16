import { memo } from "react";
import CheckBoxComponent from "../../Components/Forms/CheckBox";
import FilterComponent from "../../Components/Filter/FilterComponent";

const CheckBoxPageComponent = () => {
  return (
    <FilterComponent Title="CheckBox" Open={true}>
      <div className="row">
        <div className="col-md-6">
          <CheckBoxComponent Title="Primary" Color="primary" />
          <CheckBoxComponent Title="Info" Color="info" />
          <CheckBoxComponent Title="Warning" Color="warning" />
          <CheckBoxComponent Title="Danger" Color="danger" />
          <CheckBoxComponent Title="Success" Color="success" />
          <CheckBoxComponent Title="Dark" Color="dark" />
          <CheckBoxComponent Title="Light" Color="light" />
        </div>
        <div className="col-md-6">
          <CheckBoxComponent Class="round" Title="Primary" Color="primary" />
          <CheckBoxComponent Class="round" Title="Info" Color="info" />
          <CheckBoxComponent Class="round" Title="Warning" Color="warning" />
          <CheckBoxComponent Class="round" Title="Danger" Color="danger" />
          <CheckBoxComponent Class="round" Title="Success" Color="success" />
          <CheckBoxComponent Class="round" Title="Dark" Color="dark" />
          <CheckBoxComponent Class="round" Title="Light" Color="light" />
        </div>
      </div>
    </FilterComponent>
  );
};

export default memo(CheckBoxPageComponent);
