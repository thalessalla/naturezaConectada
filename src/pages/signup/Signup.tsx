import { useState, useEffect } from "react";
import "./Signup.css"
import Input from "../../components/Form/Input"
import { ChangeEvent } from "react";
import SubmitButton from "../../components/Form/SubmitButton/SubmitButton";
import { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import axios, { AxiosResponse } from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


interface UserRegistrationResponse {
  id: number;
  error?: string;
}

interface UserFormData {
  username: string;
  password: string;
  email: string;
  cpf: string;
  cep: string;
  cidade: string;
  rua: string;
  numero: number;
  complemento?: string;
}

const schema = yup.object().shape({
  username: yup.string().required('Nome do usuário é obrigatório'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)/, 'A senha deve ter caracteres e números'),
  email: yup.string().email('Digite um endereço de e-mail válido').required('O e-mail é obrigatório'),
  cpf: yup.string()
    .matches(/^\d{11}$/, 'Digite seu CPF corretamente') 
    .required('Campo obrigatório'),
  cep: yup.string()
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido') 
    .required('Campo obrigatório'),
  cidade: yup.string().required('Nome da Cidade é obrigatório'),
  rua: yup.string().required('Campo de rua é obrigatório'),
  numero: yup.number().required('Campo de número da casa é obrigatório'),
  complemento: yup.string(),
});


const Register = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<UserFormData>({
    resolver: yupResolver(schema),
  });
  
  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    try {
      const response: AxiosResponse<UserRegistrationResponse> = await axios.post('http://localhost:3001/users', data);
      console.log('User registered with ID:', response.data.id);
      alert('User cadastrado');
     
      reset();
    } catch (error) {
      console.error('User não cadastrado');
    }
  };

  return (
    <div className="container-signup">
    <h1>Cadastre-se</h1>
    <h2>Dados Pessoais</h2>
   <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome Completo</label>
          <input type="text" {...register('username', { required: true })} />
          {errors.username && <span>Este campo é obrigatório</span>}

          <label>E-mail</label>
          <input type="email" {...register('email', { required: true })} />
          {errors.username && <span>Este campo é obrigatório</span>}

            <label>CPF</label>
          <input type="text" {...register('cpf', { required: true })} />
          {errors.username && <span>Este campo é obrigatório</span>}
        
          <label>Senha</label>
          <input type="password" {...register('password', { required: true })} />
          {errors.password && <span>Este campo é obrigatório</span>}

          <h3>Endereço</h3>

          <label>Cep</label>
          <input type="text" placeholder="00000-000" {...register('cep', { required: true })} />
          {errors.password && <span>Este campo é obrigatório</span>}

          <label>Cidade</label>
          <input type="text" {...register('cidade', { required: true })} />
          {errors.password && <span>Este campo é obrigatório</span>}

          <label>Rua</label>
          <input type="string" {...register('rua', { required: true })} />
          {errors.password && <span>Este campo é obrigatório</span>}

          <label>Numero</label>
          <input type="number" {...register('numero', { required: true })} />
          {errors.password && <span>Este campo é obrigatório</span>}

          <label>Complemento</label>
          <input type="text" {...register('complemento', { required: true })} />
          {errors.password && <span>Este campo é obrigatório</span>}

        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Register