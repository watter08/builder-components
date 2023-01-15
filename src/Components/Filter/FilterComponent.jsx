import { memo,useState } from "react";

const FilterComponent = ({ 
  Title = "", 
  HeaderClass = "primary",
  children }) => {
    const [isOpen , setIsOpen] = useState(false);
    const handleOpenClose = () => setIsOpen(!isOpen);
  return (
    <div className="pt-5">
      <div className={`card card-filter`}>
        <div className={`card-header ${HeaderClass}`} onClick={handleOpenClose}>
          <span className="fs-2 float-start pt-2">{Title}</span>
          <span className="fs-4 float-end pt-3 icon"><i className={!isOpen ? "fas fa-arrow-turn-down" : "fas fa-arrow-turn-up"}></i></span>
        </div>
        <div className={`card-body ${isOpen ? "show-filter-body" : "hidden-filter-body"}`}>{children}</div>
      </div>
    </div>
  );
};

export default memo(FilterComponent);
