import { memo, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

const CodeComponent = ({
  Title = "",
  Height = 370,
  Theme = "vs-dark",
  Language = "javascript",
  Value = "",
  IsOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [codeValue, setCodeValue] = useState("");

  useEffect(() => {
      setIsOpen(IsOpen);
      setCodeValue(Value);
  },[])

  return (
    <div className="p-3">
      <div
        className={`code-body pt-2 pb-4 ${
          isOpen ? "hidden-code-body" : "show-code-body"
        }`}
      >
        <span className="fs-5 px-4 float-start code-title">{Title}</span>
        <span
          className="fs-5 float-end px-3 pb-1 text-white code-icon icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={isOpen ? "fas fa-arrow-down" : "fas fa-arrow-up"}></i>
        </span>
        <div className={`${isOpen ? "hidden-code-child" : "show-code-child"}`}>
          <Editor
            height={Height}
            theme={Theme}
            defaultLanguage={Language}
            defaultValue={codeValue}
            onChange={(code) => setCodeValue(code)}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(CodeComponent);
