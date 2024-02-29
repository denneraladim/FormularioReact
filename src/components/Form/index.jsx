import { useState } from 'react'
import styles from './Form.module.css'

export default function Form() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const {telephone, setTelephone} = useState('')
    

    const handleSignupForm = (event) => {
        event.preventDefault()
        console.log({ name, email, telephone})
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
         type='tel'
         placeholder='telefone'
         required
         value={telephone}
         onChange={(event) => setTelephone(event.target.value) } 
        />
        <button type='submit'>Enviar</button>
        </form>
       </div>
    )
}