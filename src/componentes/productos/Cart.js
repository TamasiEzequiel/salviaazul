import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"


export const Cart = (item) => { //VISTA CARRITO

    const { setCart, cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    const restar = id => {
        cart.forEach(item => {
            if (item.id === id) {  
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -=1; 
            }
            setCart([...cart])
        });
    }

    const sumar = id => {
        cart.forEach(item => {
            if (item.id === id) {
                item.cantidad === 0 ? item.cantidad = 1 : item.cantidad +=1; 
            }
            setCart([...cart])
        });
    }







    const handleWsp = () => {

        let productosParaWsp = cart.map(producto => `- ${producto.nombre}, $${producto.precio * producto.cantidad}, ${producto.cantidad} unidades`); // Le añadimos un guión delante del nombre y también el monto
        const formateadoProductos = productosParaWsp.join('\n'); // Unimos todos los elementos del array en una cadena usando como separador el salto de línea
        // Como la variable ya es una cadena, no necesitamos usar JSON.strignify()
        //window.location.href = 'https://api.whatsapp.com/send?phone=333333333&text=Me%20interesan%20los%20siguientes%20productos' + ' ' + productosConFormatoAmigable // Comento esta línea para no redirigir realmente en este ejemplo



        window.open('https://api.whatsapp.com/send/?phone=1568501644&text=Hola%21+Quiero+comunicarme+con+ustedes+para+realizar+la+compra+de+los+siguientes+productos:' + ' ' + formateadoProductos + ' por un total de $' + totalCart() + '&type=phone_number&app_absent=0&source=&data=', '_blank')
    }

    return (
        <div className="viewCart">
            <h2>Compra</h2>

            {
                cart.map((item) => (
                    <div className="cardCart" key={item.id}>
                        <img id="imgCart" src={item.img} />
                        <div className="tittleBox">
                            <h4 id="cardCartTittle">{item.nombre}</h4>
                            <p>Cantidad: {item.cantidad} ${item.cantidad * item.precio}</p>

                            <button className="btnDelete" onClick={() => eliminarItem(item.id)}> Borrar</button>
                           

                            <button className="btnRestar" onClick={() => restar(item.id)}> -</button>
                            <button className="btnSumar" onClick={() => sumar(item.id)}> +</button>

                        </div>
                        <hr></hr>
                    </div>
                    
                ))

            }

            <h2>Total: ${totalCart()} </h2>

            <div className="vaciarCart">
                <button className="btnVCart" onClick={vaciarCart}> Vaciar Carrito</button>
                <Link /* to="/checkout"*/ onClick={handleWsp} className="btnTcompra"> Comprar</Link>
            </div>
        </div>
    )
}

