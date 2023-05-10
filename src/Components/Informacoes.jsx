import style from "./css/Informacoes.module.css"

import pix from "./images/pix.jpg"

function Informacoes(){
    return(
        <>
            <section id={style.Infosec}>
                <div className={style.Piximg}>
                    <img src={pix} alt="" />
                    <div className={style.Infotext}>
                        <h2>Nexa transferências</h2>
                        <h3>Transfira sem limites de horário e sem taxas adicionais</h3>
                        <h4> Com a transferência via Pix do Nexa, enviar e receber dinheiro é rápido, fácil e seguro. Simplifique a sua vida financeira com o Pix!</h4> 
                    </div>
                </div>

                <div className={style.Segimg}>
                    <img src={pix} alt="" />
                    <div className={style.Infotext}>
                        <h2>Nexa seguros</h2>
                        <h3>Proteja o seu futuro com os seguros</h3>
                        <h4>Oferecemos opções personalizadas para atender às suas necessidades, desde seguros de vida e saúde até seguros de automóveis e residências.</h4> 
                    </div>
                </div>

                <div className={style.Piximg}>
                    <img src={pix} alt="" />
                    <div className={style.Infotext}>
                        <h2>Nexa transferências</h2>
                        <h3>Transfira sem limites de horário e sem taxas adicionais</h3>
                        <h4> Com a transferência via Pix do Nexa, enviar e receber dinheiro é rápido, fácil e seguro. Simplifique a sua vida financeira com o Pix!</h4> 
                    </div>
                </div>

                <div className={style.Segimg}>
                    <img src={pix} alt="" />
                    <div className={style.Infotext}>
                        <h2>Nexa seguros</h2>
                        <h3>Proteja o seu futuro com os seguros</h3>
                        <h4>Oferecemos opções personalizadas para atender às suas necessidades, desde seguros de vida e saúde até seguros de automóveis e residências.</h4> 
                    </div>
                </div>
            </section>
        </>
    )
}

export default Informacoes