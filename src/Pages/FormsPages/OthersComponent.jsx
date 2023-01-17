import { memo } from "react";
import CodeComponent from "../../Components/Code/CodeComponent";

const OthersPageComponent = () => {
  return (
    <>
      <CodeComponent Title="Code Component" />
    </>
  );
};

export default memo(OthersPageComponent);
