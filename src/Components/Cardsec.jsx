import style from "./css/Cardsec.module.css"
import cardfrente from "./images/cardfrente.png"
import cardtras from "./images/cardtras.png"

function Cardsec(){
    return(
        <>
            <section id={style.cardsec}>
                <div className={style.cardimg}>
                    <img src={cardfrente} alt="" className={style.cardfrente}/>
                    <img src={cardtras} alt="" className={style.cardtras}/>
                </div>
                
                <div className={style.cardinfo}>
                    <h2>Peça já o CardNexa</h2>
                    <p>O poder de comprar o que quiser, quando quiser. Desfrute de benefícios exclusivos e segurança em cada transação. Peça agora o seu!</p>

                    <button className={style.btncard}>Solicitar cartão</button>
                </div>
            </section>
        </>
    )
}

export default Cardsec