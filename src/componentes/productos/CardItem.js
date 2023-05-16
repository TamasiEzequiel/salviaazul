

export const CardItem = ({ id, nombre, precio, img, stock }) => {

    const handleWsp = () => {

        window.open('https:wa.me/1168501644?text=Hola!%20Quiero%20comunicarme%20con%20ustedes', '_blank')
    }

    return (

        <div className="CardItem">
            <img src={img} />
            <h3 id="cardTitle">{nombre}</h3>
            <p>{"$" + precio}</p>
            <p>{"Stock: " + stock}</p>
            <button className="btn-whatsapp" alt="Whatsapp" onClick={handleWsp}>Enviar Mensaje</button>
        </div>
    )


}

/*
        <button className="btn-whatsapp" alt="Whatsapp" onClick='https://api.whatsapp.com/send?phone=5491168501644&text=Hola!%20Quiero%20comunicarme%20con%20ustedes'></button>*/

/*   IMPLEMENTAR DESPUES LA VISTA DE "VER MAS" Y DETALLAR EL PRODUCTO


<Link to={`/detail/${id}`}>
            <button className="btn-vermas"> Ver mas </button>
            </Link>
            */