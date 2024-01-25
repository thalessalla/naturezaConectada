import "./Login.css"

import { Link } from 'react-router-dom';
import Input from "../../components/Form/Input";
import SubmitButton from "../../components/Form/SubmitButton/SubmitButton";

import { useState } from "react";


function Login() {




  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode realizar a lógica de submissão do formulário
    console.log('Email:', email);
    console.log('Senha:', senha);
  };





  return (
    <section>
    <div className="container-login">
    
    <div className="first-column-login">
      <h1>Bem-vindo <br /> de volta</h1>

    </div>


<div className="second-column-login">


<form action="" method="post">
<h2>Login</h2>

<Input
        type="email"
        text="E-mail"
        name="email"
        placeholder="exemplo@email.com"
        handleChange={handleEmailChange}
        value={email}
      />

      <Input
        type="password"  
        text="Senha"
        name="senha"
        handleChange={handleSenhaChange}
        value={senha}
      />
   

   <p>Ainda não tem cadastro? <Link className="link-signup" to="/signup">Cadastre-se! </Link></p>
</form>


 </div>
</div>
</section>
  );
}

export default Login;