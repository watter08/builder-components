import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetUuId } from "../../Libs/Helper";

const AsideComponent = ({ Links = [] }) => {
  const [linksState, setLinksState] = useState([]);

  useEffect(() => {
    if (!Links) return;
    setLinksState(Links);
  }, [Links]);

  const handleSideBarClick = (linkTo) => {
    const links = linksState.map((link) => ({
        ...link,
        isActive: linkTo === link.link
    }))
    setLinksState(links);
  }

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
      <ul className="p-0">
        {linksState &&
          linksState.map((link) => (
            <li key={GetUuId()} onClick={() => handleSideBarClick(link?.link)}>
              <Link
                to={link?.link}
                key={GetUuId()}
                className={link?.isActive ? "active" : ""}
              >
                <span className="icon" key={GetUuId()}>
                  <i className={link?.icon}></i>
                </span>
                <span className="item" key={GetUuId()}>{link?.description}</span>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default memo(AsideComponent);
