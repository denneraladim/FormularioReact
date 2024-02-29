import styles from './Form.module.css'

export default function Form() {

    const handleSignupForm = (event) => {
        event.preventDefault()
        console.log('HANDLE SIGNUP FORM')
      }
    return (

        <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSignupForm}>
          <h1>Formulário de cadastro</h1>
          <input type='text' placeholder='Nome completo' required/>
          <input type='email' placeholder='E-mail' required/>
          <input type='password' placeholder='Senha' required/>
          <button type='submit'>Enviar</button>
        </form>
       </div>
    )
}