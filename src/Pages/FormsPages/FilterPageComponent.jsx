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
          <FilterComponent Title="Filter Component Code - Primary">
            <div className="col-md-12 code-box">
              <p>{`   import { memo,useState } from "react";                                                                                                         `}</p>
              <p>{`   const FilterComponent = ({ `}</p>
              <p>{`     Title = "", `}</p>
              <p>{`     HeaderClass = "primary",`}</p>
              <p>{`     children }) => {`}</p>
              <p>{`       const [isOpen , setIsOpen] = useState(false);`}</p>
              <p>{`       const handleOpenClose = () => setIsOpen(!isOpen);`}</p>
              <p>{`     return (`}</p>
              <p>{`       <div className="pt-5">`}</p>
              <p>{`         <div className={card card-filter}>`}</p>
              <p>{`           <div className={'card-header {HeaderClass}} onClick={handleOpenClose}>`}</p>
              <p>{`             <span className="fs-2 float-start pt-2">{Title}</span>`}</p>
              <p>{`             <span className="fs-4 float-end pt-3 icon"><i className={!isOpen ? "fas fa-arrow-turn-down" : "fas fa-arrow-turn-up"}></i></span>`}</p>
              <p>{`           </div>`}</p>
              <p>{`           <div className={card-body {isOpen ? "show-filter-body" : "hidden-filter-body"}}>{children}</div>`}</p>
              <p>{`         </div>`}</p>
              <p>{`       </div>`}</p>
              <p>{`     );`}</p>
              <p>{`   };`}</p>
              <p>{`   export default memo(FilterComponent);`}</p>
            </div>
          </FilterComponent>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <FilterComponent Title="Light" HeaderClass="light"></FilterComponent>          
        </div>
        <div className="col-md-6">
          <FilterComponent Title="Info" HeaderClass="info"></FilterComponent>          
        </div>
        <div className="col-md-6">
          <FilterComponent Title="Success" HeaderClass="success"></FilterComponent>          
        </div>
        <div className="col-md-6">
          <FilterComponent Title="Warning" HeaderClass="warning"></FilterComponent>          
        </div>
        <div className="col-md-6">
          <FilterComponent Title="Danger" HeaderClass="danger"></FilterComponent>          
        </div>
        <div className="col-md-6">
          <FilterComponent Title="Dark" HeaderClass="dark"></FilterComponent>          
        </div>
      </div>
    </div>
  );
};

export default memo(FilterPageComponent);
