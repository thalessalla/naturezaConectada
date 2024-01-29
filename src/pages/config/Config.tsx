
import "./Config-screen.css"
import React, { useState } from 'react';
import EditPersonalData from "../../components/config/config-component";
import EditPassword from "../../components/EditPassword/EditPassword";

function Config() {
  const [activeOption, setActiveOption] = useState('personalData');

  return (
    <div className="screen-signup">
       
   <div>
    <h1>Configurações</h1>
   <div className="conatiner-grid-admin">
   
     <div className="container-butons-admin">
      
     
      <button className="btn-admin-select" onClick={() => setActiveOption('personalData')}><i className="ph ph-user-circle-gear"></i>  Editar Dados</button>
        <button className="btn-admin-select" onClick={() => setActiveOption('password')}><i className="ph ph-password"></i>  Editar Senha</button>

     </div>


     <div className="panel-content">
        {activeOption === 'personalData' ? <EditPersonalData /> : <EditPassword />}
      </div>

   </div>
  </div>
  </div>
  );
}

export default Config