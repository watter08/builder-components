import { memo } from "react";
import FilterComponent from "../../Components/Filter/FilterComponent";

const FilterPageComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Filter Component</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
        <FilterComponent Title="Filter Component Code">
        <section>
          <p>
            {'const FilterComponent = ({ Title = "", children }) => {        '}
          </p>
          <p>{"  return ("}</p>
          <p>{"    <>"}</p>
          <p>{'      <div id="aspect-content">'}</p>
          <p>{'        <div class="aspect-tab">'}</p>
          <p>{"          <input"}</p>
          <p>{'            id="item-18"'}</p>
          <p>{'            type="checkbox"'}</p>
          <p>{'            class="aspect-input"'}</p>
          <p>{'            name="aspect"'}</p>
          <p>{"          />"}</p>
          <p>
            {'          <label for="item-18" class="aspect-label"></label>'}
          </p>
          <p>{'          <div class="aspect-content">'}</p>
          <p>{'            <span class="aspect-name">{Title}</span>'}</p>
          <p>{"          </div>"}</p>
          <p>{'          <div class="aspect-tab-content">'}</p>
          <p>{'            <div class="sentiment-wrapper">{children}</div>'}</p>
          <p>{"          </div>"}</p>
          <p>{"        </div>"}</p>
          <p>{"      </div>"}</p>
          <p>{"    </>"}</p>
          <p>{"  );"}</p>
          <p>{"};"}</p>
        </section>
        </FilterComponent>
        </div>
      </div>

    </div>
  );
};

export default memo(FilterPageComponent);
