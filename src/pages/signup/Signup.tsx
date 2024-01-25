
import "./Signup.css"
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
    .matches(/^\d{8}$/, 'CEP inválido') 
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
      const cpfCheck = await axios.get(`http://localhost:3001/users?cpf=${data.cpf}`);
      const emailCheck = await axios.get(`http://localhost:3001/users?email=${data.email}`);

      if (cpfCheck.data.length > 0) {
        alert('CPF já cadastrado');
        return;
      }

      if (emailCheck.data.length > 0) {
        alert('E-mail já cadastrado');
        return;
      }
      const response: AxiosResponse<UserRegistrationResponse> = await axios.post('http://localhost:3001/users', data);
      console.log('User registered with ID:', response.data.id);
      alert('User cadastrado\n\nBem-vindo à área do usuário');



      reset();
    } catch (error) {
      console.error('User não cadastrado');
    }
  };



  return (
    <div className="screen-signup">
    <h1>Cadastre-se</h1>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container-signup">
        <h2>Dados Pessoais</h2>
        <div className="container-personal-data">

          <div>
            <label>Nome Completo</label>
            <input type="text" aria-label="Inisra seu nome completo" {...register('username', { required: true })} />
            {errors.username && <span>Insira o nome completo</span>}
          </div>


          <div>
            <label>E-mail</label>
            <input type="email" aria-label="Insira o seu e-mail" placeholder="exemplo@exemplo.com" {...register('email', { required: true })} />
            {errors.email && <span>Digite um email válido</span>}
          </div>


          <div>
            <label>CPF</label>
            <input type="text" placeholder="00000000000" aria-label="Insira seu CPF sem traços ou pontos" {...register('cpf', { required: true })} />
            {errors.cpf && <span>Digite sem pontos e hífen</span>}
          </div>


          <div>
            <label>Senha</label>
            <input type="password" aria-label="Insira a senha" {...register('password', { required: true })} />
            {errors.password && <span>A senha deve ter caracteres e números</span>}
          </div>

        </div>

        <hr />

        <h2>Endereço</h2>

        <div>

          <div>
            <label>Cep</label>
            <input type="text" placeholder="00000000" aria-label="Insira o Cep de onde você mora" {...register('cep', { required: true })} />
            {errors.cep && <span>Digite sem hífen</span>}
          </div>

          <div>
            <label>Cidade</label>
            <input type="text" aria-label="Insira a cidade a onde você reside" {...register('cidade', { required: true })} />
            {errors.cidade && <span>Campo obrigatório</span>}
          </div>


          <div>
            <label>Rua</label>
            <input type="string" aria-label="Rua a onde você mora" {...register('rua', { required: true })} />
            {errors.rua && <span>Campo obrigatório</span>}
          </div>


          <div>
            <label>Numero</label>
            <input type="number" aria-label="insira o numero de sua residencia" {...register('numero', { required: true })} />
            {errors.numero && <span>Campo obrigatório</span>}
          </div>


          <div>
            <label>Complemento</label>
            <input type="text" aria-label="Insira um complemento caso necessário" {...register('complemento', { required: true })} />
          </div>

        </div>
        <div>
         <button type="submit" aria-label="Botão Registrar" className="btn-submite">Registrar</button> 
        </div>
        
      </div>

    </form>
  </div>
  );
}

export default Register