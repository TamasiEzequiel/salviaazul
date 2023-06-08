

export const BtnWsp = () => {

    const handleWsp = () => {

        window.open('https://api.whatsapp.com/send/?phone=1568501644&text=Hola%21+Quiero+comunicarme+con+ustedes&type=phone_number&app_absent=0', '_blank')
    }

    return (

        <div className="containerWsp">

            <img className="imagenWsp" src="img\whatsappSticky.png" onClick={handleWsp} />

        </div>
    )
}