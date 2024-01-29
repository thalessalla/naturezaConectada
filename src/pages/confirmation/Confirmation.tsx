
import "./Confirmation.css"
import Jacaranda from "../../assets/Jacarandá.webp"
import { Link } from 'react-router-dom';



function Confirmation() {
  const selectedPlants = JSON.parse(localStorage.getItem('selectedPlants') || '[]');
  return (
  
<section className="section-confirmation">
  <div className="container-confirmation">
     <div>
      <h1>Confirme o seu pedido</h1>
      <div className="grid-confirmation">

        <div className="colum-end-confirmation">
          <p>Selecione o endereço</p>

          <div className="container-end">
            <p><strong>Cidade:</strong> São Paulo - SP</p>
            <p><strong>Rua:</strong> Tiradentes</p>
            <p><strong>Numero:</strong> 20</p>
          </div>

          <div className="container-end">
            <p><strong>Cidade:</strong> São Paulo - SP</p>
            <p><strong>Rua:</strong> Três</p>
            <p><strong>Numero:</strong> 536</p>
          </div>

          <div className="container-end">
            <p><strong>Cidade:</strong> São Paulo - SP</p>
            <p><strong>Rua:</strong> 7 de Julho</p>
            <p><strong>Numero:</strong> 98</p>
          </div>

        </div>

        <div className="colum-plant-confirmation">
          <div>
          <img src={Jacaranda} alt="Jacarandá" />

          <div>
            <h2>Jacarandá</h2>
            <p><strong>Nome ciêntifico:</strong> Jacaranda mimosifolia</p>
            <p><strong>Porte:</strong> Médio</p>
          </div>

          <button>REMOVER</button>
          </div>

        </div>

      </div>
      <div className='container-butons-nav-result'>
          <Link to="/resultado">
            <div className="btn-voltar"><p>Voltar</p></div>
          </Link>

          <Link to="/Confirmation">
            <div className="btn-continuar"><p>Continuar</p></div>
          </Link>  
      </div>
     </div>
  </div>
</section>

  );
}

export default Confirmation;