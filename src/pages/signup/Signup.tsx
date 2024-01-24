import "./Signup.css"
import Input from "../../components/Form/Input"
import { ChangeEvent } from "react";
import SubmitButton from "../../components/Form/SubmitButton/SubmitButton";

function Signup() {
  return (
    <div className="container-signup">
    <h1>Cadastre-se</h1>
    <h2>Dados Pessoais</h2>
    <form >
      <Input 
          type="text"
          text="Nome Completo"
          name="name" 
          placeholder="Nome completo"
          value={""}            
          />
           <Input 
          type="email"
          text="E-mail"
          name="email" 
          value={""}            
          />
           <Input 
          type="text"
          text="CPF"
          name="CPF" 
          value={""}            
          />
           <Input 
          type="password"
          text="Senha"
          name="password" 
          value={""}            
          />

          <p>Endereço</p>
    <Input 
          type="text" // CEP
          text="Cep"
          name="cep" 
          value={""}            
          />

           <Input 
          type="text"
          text="Cidade"
          name="cidade" 
          value={""}            
          />
         <Input 
          type="text"
          text="Rua"
          name="rua" 
          value={""}            
          />
          <Input 
          type="number"
          text="Numero"
          name="numero" 
          value={""}            
          />
          <Input 
          type="text"
          text="Complemento"
          name="complemento" 
          value={""}            
          />
        
< SubmitButton 
text="Enviar"
/>

    </form>
    </div>
  );
}

export default Signup;