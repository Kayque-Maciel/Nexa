import style from "./css/Main.module.css"
import mulher from "./images/mulher.png"

function Main(){
    return(
        <>
        <section id={style.secao}>
            <div>
                
            </div>
            <img src={mulher} alt="" className={style.mulher}/>
        </section>
        </>
    )
}

export default Main