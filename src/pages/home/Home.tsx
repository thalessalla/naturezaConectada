import React from 'react';
import './home.css'



function Home() {
  return (
    <body>

    <main className="hero-section">
        <div className="d-flex">
            <img src="./assets/logomarca.svg" alt="Logomarca da Natureza Conectada. Ilustração de uma folha e ao lado direito escrito: Natureza Conectada" />
            <p>Conectando pessoas à natureza, uma semente por vez.</p>
            <a className="btn-cta hero-section-button" role="button" aria-label="Botão de chamada para cadastrar na plataforma" href="./pages/login.html">Cadastre-se</a>
            <img src="./assets/seta.svg" alt="Seta mostrando que a landing page contem mais conteúdo para baixo" className="arrow-scroll" />
        </div>
    </main>

    <section className="about-section d-flex" id="about-section">
        <div className="d-flex">
            <div className="container-text-about">
                <h2>Sobre o projeto</h2>
                <p>Este projeto enfrenta o desafio da escassez de áreas verdes nas cidades e seus impactos na qualidade
                    de vida urbana e no meio ambiente global. Aborda-se a importância de espaços verdes para a saúde
                    física e mental dos habitantes, além dos efeitos positivos na biodiversidade e no combate às
                    mudanças climáticas.</p>
            </div>
            <div>
                <img src="./assets/ecology-hand.webp" alt="Ilustração 3d de uma mão segurando um pequena muda de planta nascendo" />
            </div>
        </div>
    </section>

    <section className="earth">
        <div className="d-flex">
            <div className="item-1-earth">
                <img src="./assets/3d-planet.webp" alt="Ilustração 3d do planeta terra" />
                <p>A falta de áreas verdes afeta a qualidade de vida urbana, saúde mental e física, bem como a
                    biodiversidade. A solução requer políticas urbanas integradas e campanhas de conscientização para
                    engajar a comunidade.</p>
            </div>
            <div className="container-txt-earth">
                <h2>O mundo pede ajuda</h2>
                <div className="d-flex">
                    <div className="d-flex align-items-center gap-4">
                        <div>
                            <p className="percent-earth">46%</p>
                        </div>
                        <div>
                            <p>das emissões de gases de efeito estufa no Brasil são provenientes de desmatamento e
                                queimadas.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                        <div>
                            <p className="percent-earth">12%</p>
                        </div>
                        <div>
                            <p>do semiárido brasileiro já está em processo de desertificação.</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                        <div>
                            <p className="percent-earth">90%</p>
                        </div>
                        <div>
                            <p>das doenças atribuíveis às mudanças climáticas afetam crianças menores de 5 anos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="technologies" id="techs-section">
        <img src="./assets/laptop.webp" alt="Figura de um laptop com ilustrações de folhas e engrenagens em sua tela, em tons de verde" />
        <div>
            <h2>Tecnologia como ferramenta</h2>
            <p>
                Plataformas tecnológicas conectam voluntários e entidades, facilitando projetos de arborização
                urbana. Apps e redes online permitem monitorar o crescimento das árvores, contribuindo para a
                expansão de áreas verdes.
            </p>
        </div>
    </section>

    <section className="working" id="working-section">
        <img src="./assets/leaves.webp" alt="Figura de três folhas verdes" />
        <div>
            <h2>Funcionamento da plataforma</h2>
            <ul>
                <li>
                    <p><strong>Cadastro:</strong> Inscreva-se na plataforma, informando sua localização e
                        preferências</p>
                </li>
                <li>
                    <p><strong>Identificação:</strong> A plataforma identifica o ecossistema local.</p>
                </li>
                <li>
                    <p><strong>Solicitação de Sementes:</strong> Escolha as plantas desejadas e solicite as sementes
                        para entrega.</p>
                </li>
            </ul>
        </div>
    </section>


</body>
  );
}

export default Home;