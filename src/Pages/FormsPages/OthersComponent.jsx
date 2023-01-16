import { memo } from "react";
import CodeComponent from "../../Components/Code/CodeComponent";

const OthersPageComponent = () => {
    return(
        <>
        <div className="row">
            <div className="col-md-12">
                <CodeComponent Title="Code Component">
                    <h2>Body Y Otras Cosas</h2>
                </CodeComponent>
            </div>
        </div>
        </>
    )
}

export default memo(OthersPageComponent)