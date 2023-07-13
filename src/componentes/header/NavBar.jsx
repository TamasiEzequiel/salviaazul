import React, { useState } from "react"
import styled from "styled-components"
import { Logo } from "./Logo"
import { Link } from "react-router-dom"
import BurguerButton from "./BurguerButton"



function NavBar() {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {

        setClicked(!clicked)


    }




    return (
        <>
            <NavContainer>
            
                <Logo />
                <div className="burguer"> <BurguerButton clicked={clicked} handleClick={handleClick} /></div>
               

                <div className={`links ${clicked ? 'active' : ''}`}>
               
                    <ul className="ul__menu">
                    
                        <li className="li-desp"onClick={handleClick} > <Link to='/'>INICIO</Link><hr></hr></li>
                        <li className="li-desp" ><Link to='/productos' onClick={handleClick}> PRODUCTOS</Link> <img src="img\angle-small-down.svg" alt="desplegable"></img>
                            <ul className="nav-desp">
                                <li onClick={handleClick} ><Link to='/productos/jabones' > JABONES </Link></li>
                                <li onClick={handleClick} ><Link to='/productos/pelo' >PELO </Link></li>
                                <li onClick={handleClick}><Link to='/productos/velas' >VELAS</Link></li>
                            </ul>
                        </li>
                        <li className="li-desp" onClick={handleClick} ><Link to='/contacto'>CONTACTO</Link></li>
                    </ul>
                </div>

               


            </NavContainer>
        </>
    )
}

export default NavBar

const NavContainer = styled.nav`

.links{
    display:none;
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    li{
        
        margin-left: 45px;
    }
    a{
        display: block;
        
    }



    @media (min-width: 768px){
        position: initial;
        margin: 0;
        display: inline;
        margin-left: auto;
        margin-right: auto;
        z-index:1000;

        .navRespons{
            display:flex;
        }
    }

        
            
            

}
@media(max-width: 768px){
    .links.active{
        display:flex;
        position:absolute;
        width:100%;
        heigth: 700px; 
        top:150px;
        left:0;
        background-color: #404486;
        z-index:1000;
    
    
        .ul__menu{
            display:flex;
            flex-direction: column;
            align-items: baseline;
            height:500px;
            top:250px;
            background-color: #404486;
            padding-left:25px;
            z-index:1000;
    
            .li-desp{
                    display:flex;              
                    z-index:1000;
    
                    img{
                        display:flex;
                        width:25px;
                        heigth:25px;
                        margin-left: 50px;
                    }
    
                    a{
                        color:white;
                    }
    
                .nav-desp{
                    margin-top:25px;
                    background-color: #6d07fc00;
                    
                    
    
                    li {
                        display: flex;
                        width: 100%;
                        height: 50px;
                        justify-content:flex-start;
                        align-items: center;
                        font-family: "augustus";
                        text-decoration: none;
                        list-style: none;
                        border-bottom: 0px;
                        border-color: rgba(128, 255, 0, 0);
                        background-color: #6d07fc00;
                        z-index:1000;
    
                        a {
                            text-align: center;
                            font-size: 15px;             
                            z-index:1000;      
                        }
    
                    }
    
                    
                }
            }
        }
    
    
        
    }
}


.burguer{

    @media(min-width: 768px){
        display:none;
    }
}


`
