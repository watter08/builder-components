import { memo } from "react";
import FilterComponent from "../../Components/Filter/FilterComponent";

const ButtonsPageComponent = () => {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-md-12">
          <h2>Editing Bootstrap Buttons</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-danger">Danger</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-dark">Dark</button>
          <button className="btn btn-light">light</button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <FilterComponent Title="Buttons Code">
            <div className="col-md-12 code-box">
              <p>{`<button className="btn btn-primary">Primary</button>`}</p>
              <p>{`<button className="btn btn-success">Success</button>`}</p>
              <p>{`<button className="btn btn-info">Info</button>`}</p>
              <p>{`<button className="btn btn-warning">Warning</button>`}</p>
              <p>{`<button className="btn btn-danger">Danger</button>`}</p>
              <p>{`<button className="btn btn-secondary">Secondary</button>`}</p>
              <p>{`<button className="btn btn-dark">Dark</button>`}</p>
              <p>{`<button className="btn btn-light">light</button>`}</p>
            </div>
          </FilterComponent>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-outline-primary">Primary</button>
          <button className="btn btn-outline-success">Success</button>
          <button className="btn btn-outline-info">Info</button>
          <button className="btn btn-outline-warning">Warning</button>
          <button className="btn btn-outline-danger">Danger</button>
          <button className="btn btn-outline-secondary">Secondary</button>
          <button className="btn btn-outline-dark">Dark</button>
          <button className="btn btn-outline-light">light</button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <FilterComponent Title="Buttons Outline Code">
            <div className="col-md-12 code-box">
              <p>{`<button className="btn btn-outline-primary">Primary</button>`}</p>
              <p>{`<button className="btn btn-outline-success">Success</button>`}</p>
              <p>{`<button className="btn btn-outline-info">Info</button>`}</p>
              <p>{`<button className="btn btn-outline-warning">Warning</button>`}</p>
              <p>{`<button className="btn btn-outline-danger">Danger</button>`}</p>
              <p>{`<button className="btn btn-outline-secondary">Secondary</button>`}</p>
              <p>{`<button className="btn btn-outline-dark">Dark</button>`}</p>
              <p>{`<button className="btn btn-outline-light">light</button>`}</p>
            </div>
          </FilterComponent>
        </div>
      </div>
    </div>
  );
};

export default memo(ButtonsPageComponent);
