

export const ViewItem = ({  nombre, img, descrip }) => {

    const handleWsp = () => {

        window.open('https://api.whatsapp.com/send/?phone=1568501644&text=Hola%21+Quiero+comunicarme+con+ustedes&type=phone_number&app_absent=0', '_blank')
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


