import styles from './Form.module.css'

import FormLogo from '../../assets/form-logo.png'

import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirPassword: yup.string().required().oneOf([yup.ref('password')]),
  })
  .required()

export default function Form() {

  const {register, handleSubmit, watch,formState: { errors },} = useForm()

  function onSubmit(userData){
    console.log(userData)
  }
  console.log(errors)

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <img src={FormLogo} alt="imagem-logo" className={styles.img}/>
      <label>
        Nome
        <input {...register("name",{ required: true })} />
        {errors.name && <span>O nome é obrigatório</span>}
      </label>
      <label>
        E-mail
        <input {...register("email",{ required: true })} />
      </label>
      <label>
        Senha
        <input {...register("password",{ required: true })} />
      </label>
      <label>
        Confirmar senha
        <input {...register("confirmPassword",{ required: true })} />
      </label>
      <button>Cadastrar-se</button>
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