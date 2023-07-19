import "./button.css"
function Boton(props){
    return(
        <div>
            <button onClick={props.onClick} className="btn-caja">
                {props.nombreBoton}
                
            </button>
        </div>
    )
}

export default Boton