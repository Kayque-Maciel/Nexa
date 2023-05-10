import style from "./css/Informacoes.module.css"

import pix from "./images/pix.jpg"
import seguro from "./images/seguro.jpg"
import emprestimo from "./images/emprestimo.jpg"
import investimento from "./images/investimento.jpg"

function Informacoes(){
    return(
        <>
            <section id={style.Infosec}>
                <div className={style.Esqimg}>
                    <img src={pix} alt="" />
                    <div className={style.Infotext}>
                        <h2>Nexa transferências</h2>
                        <h3>Transfira sem limites de horário e sem taxas adicionais</h3>
                        <h4> Com a transferência via Pix do Nexa, enviar e receber dinheiro é rápido, fácil e seguro. Simplifique a sua vida financeira com o Pix!</h4> 
                    </div>
                </div>

                <div className={style.Dirimg}>
                    <img src={seguro} alt="" />
                    <div className={style.Infotext}>
                        <h2>Nexa seguros</h2>
                        <h3>Proteja o seu futuro com os seguros</h3>
                        <h4>Oferecemos opções personalizadas para atender às suas necessidades, desde seguros de vida e saúde até seguros de automóveis e residências.</h4> 
                    </div>
                </div>

                <div className={style.Esqimg}>
                    <img src={emprestimo} alt="" />
                    <div className={style.Infotext}>
                        <h2>Nexa empréstimos</h2>
                        <h3>Realize seus projetos com os empréstimos</h3>
                        <h4>Com taxas competitivas e condições flexíveis de pagamento, temos o empréstimo ideal para você. Solicite agora e tenha o dinheiro que precisa para realizar seus sonhos!</h4> 
                    </div>
                </div>

                <div className={style.Dirimg}>
                    <img src={investimento} alt="" />
                    <div className={style.Infotext}>
                        <h2>Nexa investimentos</h2>
                        <h3>Investir agora é investir no seu futuro</h3>
                        <h4>Oferecemos opções de investimento que se encaixam no seu perfil, com rentabilidade atrativa e segurança. Conte com a nossa expertise e invista no que realmente importa para você!</h4> 
                    </div>
                </div>
            </section>
        </>
    )
}

export default Informacoes