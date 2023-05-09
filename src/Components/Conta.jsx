import style from "./css/Conta.module.css"

function Conta(){
    return(
        <>
            <section id={style.Contasec}>
                <div className={style.Formulario}>
                    <div className={style.Formulariotitulo}>
                        <h3>Acesse sua conta agora!</h3>
                        <p>Para acessar sua conta informe seu nome, data de nascimento e CPF</p>
                    </div>

                    <div className={style.login}>
                        <label for="nome_login">Seu nome</label>
                        <input id="nome_login" name="nome_login" type="text" placeholder="Digite seu nome"/>

                        <label for="cpf_login">Seu CPF</label>
                        <input id="cpf_login" name="cpf_login" type="text" placeholder="Digite seu CPF"/>

                        <label for="data_login">Sua data de nascimento</label>
                        <input id="data_login" name="data_login" type="text" placeholder="Digite sua data de nascimento"/>
                    </div>

                    <div className={style.cadastro}>
                        <p>Ainda não possui conta? <a href="#">Cadastre-se</a></p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Conta