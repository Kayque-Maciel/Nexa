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
                
                <div>
                    <h2></h2>
                </div>
            </section>
        </>
    )
}

export default Cardsec