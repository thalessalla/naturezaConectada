import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginRequest, loginSuccess, loginFailure } from '../../features/slice/loginSlice'
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { UserType } from '../userPage/UserTypes';
import './Login.css'

interface FormData{
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Digite um endereço de e-mail válido')
    .required('O e-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
})

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      dispatch(loginRequest())
      const passwordCheck = await axios.get(
        `http://localhost:3001/users?password=${data.password}`
      )
      const emailCheck = await axios.get(
        `http://localhost:3001/users?email=${data.email}`
      )

      if (passwordCheck.data.length > 0 && emailCheck.data.length > 0) {
        console.log('Login com sucesso:')
        dispatch(loginSuccess(emailCheck.data[0]))
        navigate('/userPage')
        console.log(data.email)
      } else {
        dispatch(loginFailure('Credenciais inválidas'))
      }
    } catch (error) {
      console.error('Login falhou:', error)
      dispatch(loginFailure('Erro ao fazer login'))
    }
  }

  return (
    <section className="section-login">
      <div className="container-login">
        <div className="first-column-login">
          <h1>
            Bem-vindo <br /> de volta
          </h1>
        </div>

        <div className="second-column-login">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>

            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                aria-label="Insira o seu email"
                placeholder="email@email.com"
                {...register('email')}
              />
              {errors.email && <span>Campo obrigatório</span>}
            </div>

            <div>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                aria-label="Insira a senha"
                {...register('password')}
              />
              {errors.password && <span>Campo obrigatório</span>}
            </div>

            <button
              type="submit"
              aria-label="Botão entrar"
              className="btn-submite"
            >
              Entrar
            </button>

            <p>
              Ainda não tem cadastro?
              <Link className="link-signup" to="/signup">
                {' '}
                Cadastre-se!{' '}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login

