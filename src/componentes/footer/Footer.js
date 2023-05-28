
import { Redes } from "../redes/Redes"
import { Sitemap } from "../sitemap/Sitemap"
import { LogoFoo } from "./LogoFoo"

export const Footer = () => {

   
    return (

        <div className="divFooter"> 
            <LogoFoo/>
            <Redes/>
            <Sitemap/>
        </div>
    )
}