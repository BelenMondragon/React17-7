import "./newComponent.css"

function Titulo(props) {

    function michi(estaEnCaja) {
        if (estaEnCaja === true) {
            return (
                <div>
                    <h2>michi en caja</h2>
                    <h3>michi feliz</h3>
                </div>);
        } else {
            return (<h2>michi </h2>)
        }
    }

    return (
        <>
            <div>{michi(props.estaEnCaja)}</div>
            <div>{props.children}</div>
        </>
    )



}

export default Titulo