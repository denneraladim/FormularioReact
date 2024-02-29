import { useState } from 'react'
import styles from './Form.module.css'

export default function Form() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const {password, setPassword} = useState('')

    const handleSignupForm = (event) => {
        event.preventDefault()
        console.log({ name, email, password})
      }
    return (

        <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSignupForm}>
          <h1>Formulário de cadastro</h1>
          <input
           type='text'
           placeholder='Nome completo'
           required
           value={name}
           onChange={(event) => setName(event.target.value) }
          />
          <input
           type='email'
           placeholder='E-mail'
           required
           value={email}
           onChange={(event) => setEmail(event.target.value) }
          />
          <input 
          type='password'
          placeholder='Senha'
          required
          value={password}
          onChange={(event) => setPassword(event.target.value) }
         />
          <button type='submit'>Enviar</button>
        </form>
       </div>
    )
}