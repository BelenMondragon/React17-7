import "./Michis.css"

function ImagenMichis(props){


    function imagen (estaEnCaja){
        let imagen = ""
        if (estaEnCaja === true){
          imagen = "/gari-2828199.webp"
        }else{
          imagen = "/descubre-como-se-comporta-un-gato.jpg"
        }
        return(<img className="michiclass" src={imagen} alt="no se pudo cargar"/>)
      }

return <div>{imagen(props.estaEnCaja)}</div>;
}


export default ImagenMichis;