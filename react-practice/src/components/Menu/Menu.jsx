import "./Menu.css"
function Menu(props) {
    return (
        <div class="container-fluid p-0">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <input type="text"></input>
                    <button class="navbar-brand" onClick={props.onClick} className="btn-signin">{props.nombreBoton}</button>
                </div>
            </nav>
        </div>
    )
}

export default Menu