import style from "./css/Footer.module.css"

function Footer(){
    return(
        <>
            <footer>
                <div className={style.InfoFooter}>

                    <div className={style.Links}>
                        <ul>
                            <li><h3>Para você</h3></li>
                            <li>Conta Digital Pessoa Física</li>
                            <li>Cartão de Crédito</li>
                            <li>Empréstimos e Crédito Imobiliário</li>
                            <li>Seguros</li>
                            <li>Nexa Invest</li>
                            <li>Nexa Shop</li>
                        </ul>
                    </div>
                    <div className={style.Links}>
                        <ul>
                            <li><h3>Precisa de ajuda?</h3></li>
                            <li>Central de ajuda</li>
                            <li>Canais de atendimento</li>
                            <li>Ouvidoria</li>
                            <li>2ª via do boleto</li>
                            <li>Negocie sua dívida</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className={style.Links}>
                        <ul>
                            <li><h3>Nossos números</h3></li>
                            <li>(11) 999999999</li>
                            <li>(11) 999999999</li>
                            <li>(11) 999999999</li>
                            <li>(11) 999999999</li>
                            <li>(11) 999999999</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer