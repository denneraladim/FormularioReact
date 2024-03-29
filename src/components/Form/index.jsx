import styles from './Form.module.css'
import FormLogo from '../../assets/form-logo.png'

import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
    password: yup.string().min(6,'A senha deve ter pelo menos 6 digitos').required('A senha é obrigatória'),
    confirmPassword: yup.string().required('confirmar senha é obrigatória').oneOf([yup.ref('password')],'As senhas devem ser iguais'),
  }).required();

export default function Form() {

  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors },
    } =
     useForm({
      resolver: yupResolver(schema),
     })

  async function onSubmit({name, email, password, confirmPassword}){
    await fetch('http://localhost:5000/cadastros', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword
      })
    })

    reset()
  }
  
return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <img src={FormLogo} alt="imagem-logo" className={styles.img}/>
      <label>
        Nome
        <input type='text' {...register("name",{ required: true })} />
        <span>{errors.name?.message}</span> 
      </label>
      <label>
        E-mail
        <input type='text' {...register("email",{ required: true })} />
        <span>{errors.email?.message}</span> 
      </label>
      <label>
        Senha
        <input type='password'{...register("password",{ required: true })} />
        <span>{errors.password?.message}</span> 
      </label>
      <label>
        Confirmar senha
        <input type='password' {...register("confirmPassword",{ required: true })} />
        <span>{errors.confirmPassword?.message}</span> 
      </label>
      <button>Cadastrar-se</button>
    </form>
  )
}

