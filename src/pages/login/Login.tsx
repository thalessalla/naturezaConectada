import "./Login.css"

import { Link } from 'react-router-dom';
import Input from "../../components/Form/Input";
import SubmitButton from "../../components/Form/SubmitButton/SubmitButton";
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from "react";

interface FormData {
  email: string;
  password: string;
}


const schema = yup.object().shape({
  email: yup.string().email('Digite um endereço de e-mail válido').required('O e-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória').oneOf(['string', 'number'], 'A senha deve ter caracteres e números'),
});



  const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
      resolver: yupResolver(schema),
    });
  
    const onSubmit = async (data: FormData) => {
      try {
        const response = await axios.get(
          `http://localhost:3001/users?username=${data.email}&password=${data.password}`
        );
        if (response.data.length > 0) {
          console.log('Login com sucesso:', response.data[0].id);
        } else {
          console.error('Credenciais inválidas');
        }
      } catch (error) {
        console.error('Login falhou:', error);
      }
    };




  return (
    <section>
    <div className="container-login">
    
    <div className="first-column-login">
      <h1>Bem-vindo <br /> de volta</h1>

    </div>


<div className="second-column-login">


<form action="<Link to='/UserPage'">
<h2>Login</h2>


<div>

<label htmlFor="email">E-mail</label>  
<input type="email" aria-label="Insira o seu email"
            {...register('email')}/>
</div>

<div>

<label htmlFor="password">Senha</label>  
<input type="password" aria-label="Insira a senha" 
            {...register('password')} />
</div>

<button type="submit" aria-label="Botão entrar" className="btn-submite">Entrar</button>


   <p>Ainda não tem cadastro? <Link className="link-signup" to="/signup" >Cadastre-se! </Link></p>
</form>


 </div>
</div>
</section>
  );
}

export default Login;