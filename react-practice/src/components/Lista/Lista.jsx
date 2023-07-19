import "./Lista.css"

function Lista(props){

    return(
        <li className="li-lista" key={PaymentResponse.key}>{props.texto}</li>
    )
}

export default Lista;