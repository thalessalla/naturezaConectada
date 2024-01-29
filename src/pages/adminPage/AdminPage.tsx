
import "./AdminPage.css"
import React, { useState } from 'react';
import Users from "../../components/usuarios/users";
import Plants from "../../components/plantas/plants";

function AdminPage() {
  const [activeOption, setActiveOption] = useState('personalData');

  return (
    <div className="screen-signup">
       
   <div>
    <h1>Administração</h1>
   <div className="conatiner-grid-config">
   
     <div className="container-butons-config">
      
     
      <button className="btn-config-select" onClick={() => setActiveOption('personalData')}><i className="ph ph-user-circle"></i> Usuários</button>
      <button className="btn-config-select" onClick={() => setActiveOption('password')}> <i className="ph ph-potted-plant"></i> Mudas</button>

     </div>


     <div className="panel-content">
        {activeOption === 'personalData' ? <Users /> : <Plants />}
      </div>

   </div>
  </div>
  </div>
  )
}

export default AdminPage;