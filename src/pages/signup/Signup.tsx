import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/slice/signupSlice';
import "./Signup.css"

interface UserRegistrationResponse {
  id: number;
  error?: string;
}

interface AddressData {
  cidade: string;
  rua: string;
  uf: string;
  cep: string;
}

interface UserFormData {
  uf: string;
  complemento?: string;
  numero: number;
  rua: string;
  cidade: string;
  cep: string;
  cpf: string;
  email: string;
  password: string;
  username: string;
}

const buildSchema = () =>
  yup.object().shape({
    username: yup.string().required('Nome do usuário é obrigatório'),
    password: yup
      .string()
      .required('Senha é obrigatória')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)/, 'A senha deve ter caracteres e números'),
    email: yup.string().email('Digite um endereço de e-mail válido').required('O e-mail é obrigatório'),
    cpf: yup.string().matches(/^\d{11}$/, 'Digite seu CPF corretamente').required('Campo obrigatório'),
    cep: yup.string().matches(/^\d{8}$/, 'CEP inválido').required('Campo obrigatório'),
    cidade: yup.string().required('Nome da Cidade é obrigatório'),
    rua: yup.string().required('Campo de rua é obrigatório'),
    numero: yup.number().required('Campo de número da casa é obrigatório'),
    complemento: yup.string(),
    uf: yup.string().required('Campo obrigatório'),
  });

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addressData, setAddressData] = useState<AddressData>({
    cep: '',
    cidade: '',
    rua: '',
    uf: '',
  });

  const [error, setError] = useState<string>('');
  const [isFetchingCep, setIsFetchingCep] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset }: UseFormReturn<UserFormData> = useForm<UserFormData>({
    resolver: yupResolver(buildSchema()),
  });

  useEffect(() => {
    if (addressData && addressData.cep) {
      handleCepChange(addressData.cep);
    }
  }, [addressData]);

  const [uf, setUf] = useState<string>('');

  const handleCepChange = async (cep: string) => {
    try {
      setError('');
      setIsFetchingCep(true);

      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      if (response.data.erro) {
        setError('CEP não encontrado. Digite um CEP válido.');
      } else {
        const { localidade, logradouro, uf, ...otherAddressData } = response.data;
        const sanitizedAddress = {
          cidade: localidade || '',
          rua: logradouro || '',
          uf: uf || '',
          ...otherAddressData,
        };

        setAddressData(sanitizedAddress);
        setUf(uf || '');
      }
    } catch (error) {
      console.error('Erro ao buscar dados do endereço:', error);
      setError('Ocorreu um erro ao buscar o endereço. Tente novamente mais tarde.');
    } finally {
      setIsFetchingCep(false);
    }
  };

  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    try {
      if (isSubmitting) {
        return;
      }

      setIsSubmitting(true);
      const cpfCheck = await axios.get(`http://localhost:3001/users?cpf=${data.cpf}`);
      const emailCheck = await axios.get(`http://localhost:3001/users?email=${data.email}`);

      if (cpfCheck.data.length > 0) {
        alert('CPF já cadastrado');
      } else if (emailCheck.data.length > 0) {
        alert('E-mail já cadastrado');
      } else {
        const response: AxiosResponse<UserRegistrationResponse> = await axios.post('http://localhost:3001/users', data);
        // console.log('User registered with ID:', response.data.id);
        alert('Usuário cadastrado com sucesso!\n\nRealize o login na próxima página');

        reset();
        navigate('/login');

        // Dispatch da ação de login do usuário
        dispatch(loginUser(data));
      }
    } catch (error) {
      console.error('User não cadastrado');
    } finally {
      setIsSubmitting(false);
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
             <input type="text" aria-label="Inisra seu nome completo" {...register('username', { required: true })} maxLength={60}/>
             {errors.username && <span>Insira o nome completo</span>}
           </div>

           <div>
            <label>E-mail</label>
             <input type="email" aria-label="Insira o seu e-mail" placeholder="exemplo@exemplo.com" {...register('email', { required: true })} maxLength={60} />
             {errors.email && <span>Digite um email válido</span>}
           </div>


           <div>
             <label>CPF</label>
             <input type="text" placeholder="00000000000" aria-label="Insira seu CPF sem traços ou pontos" {...register('cpf', { required: true })} maxLength={11} />
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
             <input type="text" placeholder="00000000" aria-label="Insira o Cep de onde você mora" {...register('cep', { required: true })} 
  onBlur={(e) => handleCepChange(e.target.value)} maxLength={8} />
             {errors.cep && <span>Digite sem hífen</span>}
             {error && <span>{error}</span>}
           </div>

            <div>
              <label>Cidade</label>
              <input type="text" aria-label="Insira a cidade a onde você reside" {...register('cidade', { required: true })} value={addressData.cidade} />
              {/* {errors.cidade && <span>Campo obrigatório</span>} */}
            </div>

            <div>
              <label>Rua</label>
              <input type="text" aria-label="Rua a onde você mora" {...register('rua', { required: true })} maxLength={32} />
              {errors.rua && <span>Campo obrigatório</span>}
            </div>

            <div>
              <label>Numero</label>
              <input type="number" aria-label="insira o numero de sua residencia" {...register('numero', { required: true })} />
              {errors.numero && <span>Campo obrigatório</span>}
            </div>

            <div>
              <label>Complemento</label>
              <input type="text" aria-label="Insira um complemento caso necessário" {...register('complemento', { required: true })} maxLength={30} />
            </div>

            <div>
              <label>UF</label>
              <input type="text" aria-label="Estado onde você mora" {...register('uf', { required: true })} value={uf} />
              {/* {errors.uf && <span>Campo obrigatório</span>} */}
            </div>
          </div>

          <div>
            {/* <button type="submit" aria-label="Botão Registrar" className="btn-submite" disabled={isFetchingCep || isSubmitting}></button> */}
            <button type="submit" aria-label="Botão Registrar" className="btn-submite">Registrar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
