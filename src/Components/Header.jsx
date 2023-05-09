import {Link} from "react-router-dom"

import style from "./css/Header.module.css"
import logo from "./images/logo.png"

function Header(){
    return(
        <>
        <header>

            <img src={logo} alt="logo" id={style.logo}/>
            <nav className={style.navheader}>
                <ul className={style.navlist}>
                    <li><Link to="/Conta"> Conta</Link></li>
                    <li><a href="">Investimentos</a></li>
                    <li><a href="">Benefícios</a></li>
                    <li><a href="">Central de ajuda</a></li>
                    <li><a href="">Sobre Nós</a></li> 
                </ul>
            </nav>

            <button className={style.btnheader}>Abra uma conta</button>
        </header>
        </>
    )
}

export default Header