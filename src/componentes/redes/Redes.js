
export const Redes = () => {

    const handleIg = () => {
        window.open('https://www.instagram.com/')
    }

    const handleWsp = () => {

        window.open('https://api.whatsapp.com/send/?phone=1568501644&text=Hola%21+Quiero+comunicarme+con+ustedes&type=phone_number&app_absent=0', '_blank')
    }

    const handleFb = () => {

        window.open('https://www.facebook.com/', '_blank')
    }

    return (

        <div className="redes" >
            <h3>Nuestras redes</h3>
            <img className="imgIg" src="img\instagram.png" alt="instagram" onClick={handleIg} />
            <img className="imgWsp" src="img\whatsapp.png" alt="whatsapp" onClick={handleWsp} />
            <img className="imgFb" src="img\facebook.png" alt="facebook" onClick={handleFb} />


        </div>

    )
}