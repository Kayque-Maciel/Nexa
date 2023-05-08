import style from "./css/Conta.module.css"

function Conta(){
    return(
        <>
            <section id={style.Contasec}>
                <div className={style.Cadastro}>
                    <div className={style.Cadastrotitulo}>
                        <h3>Cadastre-se agora!</h3>
                        <p>Para iniciar o seu processo de cadastro informe seu nome e CPF</p>
                    </div>

                    <div>
                        <label for="nome_login">Seu nome</label>
                        <input id="nome_login" name="nome_login" required="required" type="text" placeholder="ex. contato@htmlecsspro.com"/>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Conta