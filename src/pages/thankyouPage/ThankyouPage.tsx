import "./thankyouPage.css"
import obrigadoImg from "../../assets/obrigado.webp"
import { Link } from 'react-router-dom'

function ThankyouPage() {
  return (
    <div className="screen-obrigado">

      <div >

      <div className="container-obrigado">
        <div>
          <img src={obrigadoImg} alt="Dois jovens felizes se cumprimentando" />
        </div>


        <div>
          <h1>Pedido Finalizado!</h1>
          <p>Agradecemos por escolher ser parte ativa do "Natureza Conectada". Juntos, estamos construindo um legado de harmonia entre o urbano e o natural, inspirando comunidades e promovendo a conscientização sobre a importância vital de preservar e cultivar espaços verdes.</p>
        </div>
       
       </div>

       <div className="container-btn-obrigado">
        <Link to="/">
        <button className="btn-obrigado">HOME</button>
        </Link>
       </div>
       
      </div>
  
    </div>
  );
}

export default ThankyouPage;