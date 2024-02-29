// import { useState } from 'react'
import styles from './Form.module.css'
import FormLogo from '../../assets/form-logo.png'
export default function Form() {
  return (
    <form className={styles.form}>
      <img src={FormLogo} alt="imagem-logo" className={styles.img}/>
      <label>
        Nome
        <input type="text" placeholder='Nome Completo' />
      </label>
      <label>
        E-mail
        <input type="text" placeholder='E-mail' />
      </label>
      <label>
        Senha
        <input type="text" placeholder='Senha' />
      </label>
      <label>
        Confirmar senha
        <input type="text" placeholder='Confirmar senha' />
      </label>
      <button>Enviar</button>
    </form>
  )

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
   
    
        

    // const handleSignupForm = (event) => {
    //     event.preventDefault()
    //     console.log({ name, email})
    //   }
    // return (

    //     <div className={styles.container}>
    //     <form className={styles.form} onSubmit={handleSignupForm}>
    //       <h1>Formulário de cadastro</h1>
    //       <input
    //        type='text'
    //        placeholder='Nome completo'
    //        required
    //        value={name}
    //        onChange={(event) => setName(event.target.value) }
    //       />
    //       <input
    //        type='email'
    //        placeholder='E-mail'
    //        required
    //        value={email}
    //        onChange={(event) => setEmail(event.target.value) }
    //       />
    //      <button type='submit'>Enviar</button>
    //     </form>
    //    </div>
    // )
}