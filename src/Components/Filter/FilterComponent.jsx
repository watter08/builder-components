import { memo, useEffect, useState } from "react";

const FilterComponent = ({
  Title = "",
  HeaderClass = "primary",
  Open = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!Open) return;
    setIsOpen(Open);
  }, [Open]);

  return (
    <div className="pt-5">
      <div className={`card card-filter`}>
        <div
          className={`card-header ${HeaderClass}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="fs-2 float-start pt-2">{Title}</span>
          <span className="fs-4 float-end pt-3 icon">
            <i
              className={
                !isOpen ? "fas fa-arrow-turn-down" : "fas fa-arrow-turn-up"
              }
            ></i>
          </span>
        </div>
        <div
          className={`card-body ${
            isOpen ? "show-filter-body" : "hidden-filter-body"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default memo(FilterComponent);
