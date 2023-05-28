

export const BtnWsp = () => {

    const handleWsp = () => {

        window.open('https:wa.me/1168501644?text=Hola!%20Quiero%20comunicarme%20con%20ustedes', '_blank')
    }

    return (

        <div className="containerWsp">

            <img className="imagenWsp" src="img\whatsappSticky.png" onClick={handleWsp} />

        </div>
    )
}