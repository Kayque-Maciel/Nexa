import style from "./css/Cash.module.css"

function Conta(){
    return(
        <>
            <section id={style.Cashsec}>
                <div className={style.Infocash}>
                    <h1>O Nexa já devolveu tudo isso de cashback</h1>
                    <h2><span>R$ </span>145.879.467,85</h2>
                    <p>Quer ganhar cashback também? Clique e saiba como:</p>
                    <button className={style.btncash}>Ganhar cashback</button>
                </div>
            </section>
        </>
    )
}

export default Conta