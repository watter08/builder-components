import { memo, useState } from "react"


const CheckBoxComponent = ({Color = "primary", Title = "", Class = ""}) => {
    const [isCheck , setIsCheck] = useState(false)
    return(
        <label htmlFor="" className={"p-2 label-input-check"} onClick={() => setIsCheck(!isCheck)}>
            <label htmlFor="" className="check-label-title">{Title}</label> 
            <input type='checkbox' checked={isCheck} />
            <span className={`checkbox check-${Color} check-${Class}`}></span>  
                   
        </label>
    )
}


export default memo(CheckBoxComponent)