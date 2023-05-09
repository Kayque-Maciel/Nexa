import style from "./css/Main.module.css"
import mulher from "./images/mulher.png"
import dinheiro from "./images/dinheiro.png"
import mao from "./images/mao.png"
import cofrinho from "./images/cofrinho.png"
import pagamento from "./images/pagamento.png"
import acoes from "./images/acoes.png"

function Main(){
    return(
        <>
        <section id={style.secao}>
            <div className={style.slogan}>
                <h1>Juntos alcançando grandes alturas. Confiança, segurança e inovação em cada transação.</h1>

                <button className={style.btnsec}>Abra sua conta já!</button>
            </div>

            <img src={mulher} alt="" className={style.mulher}/>
           
        </section>
        </>
    )
}

export default Main