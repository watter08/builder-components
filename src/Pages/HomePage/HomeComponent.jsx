import { memo } from "react"
import CodeComponent from "../../Components/Code/CodeComponent"


const HomeComponentPage = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1 className="text-center p-1">Home Page</h1>
                </div>
            </div>    

            <div className="row">
                <div className="col-md-12 text-center">
                <h4>
                    Este proyecto estara desarrollado por <strong>Watter De Aza De Leon</strong> con el unico proposito de crear 
                    componentes con estilos profesionales. 
                </h4>
                </div>
            </div>      

            <div className="row">
                <div className="col-md-12 text-bold">
                    <h2>Componentes:</h2>
                    <h5>* Filter</h5>
                    <h5>* Buttons</h5>
                    <h5>* Code</h5>
                </div>
            </div>    
        </div>
    )
}

export default memo(HomeComponentPage)