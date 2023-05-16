import { Logo } from "../header/Logo"
import { Redes } from "../redes/Redes"
import { Sitemap } from "../sitemap/Sitemap"

export const Footer = () => {

   
    return (

        <div className="divFooter"> 
            <Logo/>
            <Redes/>
            <Sitemap/>
        </div>
    )
}