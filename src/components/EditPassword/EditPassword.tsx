import "./EditPassword.css"

function EditPassword(){
  return (
   
   <div className="container-edit-password">

            <label>Digite sua senha atual</label>
            <input type="password" aria-label="Digite sua senha atual"  />
            


            <label>Digite sua nova senha</label>
            <input type="password" aria-label="Digite sua nova senha"  />
            

            <label>Confirme sua nova senha</label>
            <input type="password" aria-label="Confirme sua nova senha"  />

            <button>Salvar</button>
            


   </div>
  )
}

export default EditPassword