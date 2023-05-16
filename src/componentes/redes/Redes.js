
export const Redes = () => {

    const handleIg = () => {
        window.open('https://www.instagram.com/')
    }

    const handleWsp = () => {

        window.open('https:wa.me/1168501644?text=Hola!%20Quiero%20comunicarme%20con%20ustedes', '_blank')
    }

    const handleFb = () => {

        window.open('https://www.facebook.com/', '_blank')
    }

    return (

        <div className="redes" >
            <h3>Nuestras redes</h3>
            <img className="imgIg" src="img\instagram.png" onClick={handleIg} />
            <img className="imgWsp" src="img\whatsapp.png" onClick={handleWsp} />
            <img className="imgFb" src="img\facebook.png" onClick={handleFb} />


        </div>

    )
}