import "./Login.css"
// import "../../App.css"
import { Link } from 'react-router-dom';


function Login() {
  return (
    <section>
    <div className="container-login">
    
    <div className="first-column-login">
      <h1>Bem-vindo <br /> de volta</h1>

    </div>


<div className="second-column-login">


<form action="" method="post">
<h2>Login</h2>

    <label htmlFor="email">E-mail:</label>
    <input type="email" id="email" name="email" required />

    <label htmlFor="password">Senha:</label>
    <input type="password" id="password" name="password" required />

    <button type="submit">Login</button>

   <p>Ainda não tem cadastro? <Link className="link-signup" to="/signup">Cadastre-se! </Link></p>
</form>


 </div>
</div>
</section>
  );
}

export default Login;