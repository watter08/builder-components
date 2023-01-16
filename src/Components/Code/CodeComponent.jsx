import { memo, useState } from "react";

const CodeComponent = ({ Title = "", children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`code-body px-4 pt-2 pb-4 ${
        isOpen ? "hidden-code-body" : "show-code-body"
      }`}
    >
      <span className="fs-4 float-start code-title">{Title}</span>
      <span
        className="fs-5 float-end text-white icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={isOpen ? "fas fa-arrow-down" : "fas fa-arrow-up"}></i>
      </span>
      <div className={`${isOpen ? "hidden-code-child" : "show-code-child"}`}>
        <div className="text-white pt-5">{children}</div>
      </div>
    </div>
  );
};

export default memo(CodeComponent);
