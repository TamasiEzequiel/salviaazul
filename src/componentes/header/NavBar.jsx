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
                        <li className="li-desp" > <Link to='/'>INICIO</Link><hr></hr></li>
                        <li className="li-desp" ><Link to='/productos' >PRODUCTOS</Link> <img src="img\angle-small-down.svg"></img>
                            <ul className="nav-desp">
                                <li ><Link to='/productos/jabones'> JABONES </Link></li>
                                <li ><Link to='/productos/perfumes'>PERFUMES </Link></li>
                                <li ><Link to='/productos/velas'>VELAS</Link></li>
                            </ul>
                        </li>
                        <li className="li-desp" ><Link to='/contacto'>CONTACTO</Link></li>
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
    }

        
            
            

}

.links.active{
    display:flex;
    position:absolute;
    width:100%;
    heigth: 700px; 
    top:150px;
    left:0;
    background-color: #404486;


    .ul__menu{
        display:flex;
        margin-top:150px;
        flex-direction: column;
        align-items: baseline;
        height:800px;
        top:250px;
        background-color: #404486;
        padding-left:25px;

        .li-desp{
                display:flex;
                

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
                background-color: rgba(255, 255, 255, 0);

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


                    a {
                        text-align: center;
                        font-size: 15px;

                        

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
