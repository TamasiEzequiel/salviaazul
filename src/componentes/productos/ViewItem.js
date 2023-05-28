

export const ViewItem = ({  nombre, img, descrip }) => {

    const handleWsp = () => {

        window.open('https:wa.me/1168501644?text=Hola!%20Quiero%20comunicarme%20con%20ustedes', '_blank')
    }

    return (

        <div className="containerView">



            <div className="tittleImage">
                <h3>{nombre}</h3>
                <img src={img} />
            </div>


            <div className="description">
                <h4>DESCRIPCION</h4>
                <p>{descrip}</p>

                <button className="btn-whatsapp" alt="Whatsapp" onClick={handleWsp}>Enviar Mensaje</button>


            </div>


        </div>
    )


}


