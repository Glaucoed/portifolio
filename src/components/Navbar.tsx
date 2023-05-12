import React, {useState} from "react";
import '../styles/navbar.css'

const Navbar = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>
            <div className={menu_class}>
            <div className="links">
              <a href="#main">Inicio</a>
              <a href="#sobre">Sobre</a>
              <a href="#habilidades">Habilidades</a>
              <a href="#projetos">Projetos</a>
              <a href="mailto:gesverzuthe@gmail.com"> Enviar e-mail</a>
            </div>
            </div>21
        </>
    )
}

export default Navbar