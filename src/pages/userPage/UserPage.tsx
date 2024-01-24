
import "./UserPage.css"

import sustainability from "../../assets/sustainability.webp"
import Plant from '../../assets/plant.png';


function UserPage() {
  return (
    <main>
    <section>
        <div className="card-usuario">
            <div>
                <h1>Olá Carlos!</h1>
                <p>Seja bem-vindo(a) à nossa comunidade comprometida com a Natureza. Estamos ansiosos para compartilhar conquistas, aprendizados e o impacto positivo que, juntos, podemos alcançar.</p>
                
            </div>
            <div>
                <img src={sustainability} alt="ilustração de duas mão segurando uma planta" />
            </div>
        </div>
    </section>

    <section className="cards-benefits" id="benefícios">
        <h2>Conheça os benefícios que você irá colher</h2>
        <div className="container-cards-benefits">
            <div className="card">
                <div className="card-body">
                    <h4 className="title-relative  air-quality">Melhoria da Qualidade do Ar</h4>
                    <p className="card-text">O aumento da cobertura vegetal contribui para a filtragem de poluentes do
                        ar,
                        melhorando a qualidade do ar nas áreas urbanas.</p>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h4 className=" title-relative 
                    biodiversity">Incentivo à Biodiversidade</h4>
                    <p className="card-text">O plantio de espécies nativas contribui para a preservação da biodiversidade, ajudando na conservação de flora e fauna locais.</p>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h4 className=" climatic-changes title-relative">Redução das Mudanças Climáticas</h4>
                    <p className="card-text">O reflorestamento urbano ajuda na captura de carbono, reduzindo a pegada de carbono e contribuindo para a mitigação das mudanças climáticas.</p>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h4 className=" awareness title-relative">Estímulo à Conscientização Ambiental</h4>
                    <p className="card-text">O projeto pode aumentar a conscientização sobre questões ambientais, incentivando práticas sustentáveis e responsáveis na comunidade.</p>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h4 className=" comunity title-relative">Bem-Estar da Comunidade</h4>
                    <p className="card-text">Áreas verdes têm impactos positivos na saúde mental e física, promovendo o bem-estar e reduzindo o estresse.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="ask-for-seed" id="pedido">
        <div>
            <h2>Pedir sua semente</h2>
            <button className="btn-cta button-ask" role="button" disabled aria-label="Botão de chamada para pedir uma semente">Pedir
            </button>
        </div>
        <img src={Plant} alt="Figura de uma planta de decoração em um jarro" />
    </section>


</main>
  );
}

export default UserPage;