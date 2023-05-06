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
            <div>
                
            </div>
            <img src={mulher} alt="" className={style.mulher}/>
            <div className={style.borda}>
                <div className={style.icones}>
                    <img src={dinheiro} alt="" />
                    <img src={mao} alt="" />
                    <img src={cofrinho} alt="" />
                    <img src={pagamento} alt="" />
                    <img src={acoes} alt="" />
                </div>
                
            </div>
        </section>
        </>
    )
}

export default Main