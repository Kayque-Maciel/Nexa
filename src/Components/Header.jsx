import style from "./css/Header.module.css"
import logo from "./images/logo.png"

function Header(){
    return(
        <>
        <header>

            <img src={logo} alt="logo" id={style.logo}/>
            <nav className={style.navheader}>
                <ul className={style.navlist}>
                    <li><a href="">Início</a></li>
                    <li><a href="">Cardápio</a></li>
                    <li><a href="">Sobre Nós</a></li>
                    <li><a href="">Suporte</a></li>
                    <li><a href="">Contato</a></li> 
                </ul>

                <button>Abra uma conta</button>
            </nav>
        </header>
        </>
    )
}

export default Header