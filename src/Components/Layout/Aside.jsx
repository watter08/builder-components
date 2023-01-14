import { memo } from "react";
import { Link } from "react-router-dom";

const AsideComponent = ({ Links = [] }) => {
  return (
    <>
      <div className="profile">
        <img
          src="https://cdn.hmv.com/r/w-240/hmv/files/66/668de19b-7536-4190-965a-643927dae7cd.png"
          alt="profile_picture"
        />
        <h3>Watter De Aza</h3>
        <p>Software Developer</p>
      </div>
      <ul>
        {Links.map((link) => (
          <li>
            <Link to={link?.link} key={link?.key} className={link?.isActive ? "active" : ""}>
              <span className="icon">
                <i className={link?.icon}></i>
              </span>
              <span className="item">{link?.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(AsideComponent);
