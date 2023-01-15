import { memo } from "react";

const FilterComponent = ({ Title = "", children }) => {
  return (
    <>
      <div id="aspect-content">
        <div className="aspect-tab">
          <input
            id="item-18"
            type="checkbox"
            className="aspect-input"
            name="aspect"
          />
          <label htmlFor="item-18" className="aspect-label"></label>
          <div className="aspect-content">
            <span className="aspect-name">{Title}</span>
          </div>
          <div className="aspect-tab-content">
            <div className="sentiment-wrapper">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(FilterComponent);
