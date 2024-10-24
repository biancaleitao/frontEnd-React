import React from 'react';
import './styles.css';
import logo from '../assets/logo-personalize.png';
import womam from '../assets/woman.png';
import client2 from '../assets/guy.jpg';
import client1 from '../assets/girl.jpg';
import { GiBodyBalance, GiHalfBodyCrawling, GiBodyHeight } from "react-icons/gi";


function Home(){
    return (
        <div className="container">
            <div className="header">
                <img  src={logo} alt="Logo" />
                <div className='listas'>
                <ul>
                <li>Serviços</li>
                <li>Sobre Nós</li>
                <li>Planos</li>
                </ul>
                <button>Entrar</button>
                </div>
            </div>
            <div className="hero">
                <div className="hero-title">
                    <h1>DE METAS A CONQUINTAS</h1>
                    <h2>sua transformação começa agora.</h2>
                    <p>Treinos Personalizados</p>
                    <p>Sua mudança na palma da mão</p>
                    <p>soluções de treinamento adaptadas às suas necessidades e metas</p>
                    <button>Quero me cadastrar</button>
                </div>
                <img src={womam} alt="womam academy" />
            </div>
            <div className='about'>
                <h1>Sobre a Personalize</h1>
                <h2>A qualidade e rapidez que o seu treino precisa</h2>
                <p>Na Personalize, seus treinos são adaptados da forma que você desejar. Organização é o nosso lema.
                <br /> Garantimos que você não se sinta mais perdido no seu dia!</p>
            </div>
            <div className="courses">
                <div className="course">
                    <GiHalfBodyCrawling className="icon" />
                    <h3>Treino para Emagrecimento</h3>   
                </div>
                <div className="course">
                    <GiBodyHeight className="icon" />
                    <h3>Treino para Hipertrofia (Ganho de Massa Muscular)</h3>   
                </div>
                <div className="course">
                    <GiBodyBalance className="icon" />
                    <h3> Treino Funcional (Desempenho e Resistência)</h3>   
                </div>
            </div>
            <div className="testimonials">
                <div className="testimonial-card">
                    <img src={client1} alt="Client" />
                    <div className="message">
                        <h3>Fernanda Pimentel</h3>
                        <p>"A plataforma é incrível, consegui ter organização e praticidade nos meus treinos."</p>
                    </div>
                </div>
                <div className="testimonial-card">
                    <img src={client2} alt="Client" />
                    <div className="testimonial-message">
                        <h3>Pedro Ferreira</h3>
                        <p>"Com muitos exercícios e ajuda de profissionais preparados, superei minha meta de resultados"</p>
                    </div>
                </div>
            </div>
            <div className="pillars">
                <div className="pillar">
                    <div></div>
                    <h1>Organização</h1>
                </div>
                <div className="pillar">
                    <div></div>
                    <h1>Praticidade</h1>
                </div>
                <div className="pillar">
                    <div></div>
                    <h1>Comunidade</h1>
                </div>
            </div>
            <div className="plans-section">
                <h1>Junte-se à mais de 100 mil Personais</h1>
                <div className="prices-container">
                    <div className="price-card">
                        <h1>BÁSICO</h1>
                        <h2>Grátis</h2>
                        <div className="features">
                            <p>2 Reuniões de acompanhamento
                            ao mes</p>
                            <p>1 treino personalizado ao mes</p>
                        </div>
                        <button>Iniciar</button>
                    </div>
                    <div className="price-card recommended">
                        <h1>PREMIUM</h1>
                        <h2>R$20,00 <span>mês</span></h2>
                        <div className="features">
                            <p>3 Reuniões de acompanhamento
                            ao mes</p>
                            <p>2 treino personalizado ao mes </p>
                        </div>
                        <button>Assinar</button>
                    </div>
                    <div className="price-card">
                        <h1>ESSENCIAL</h1>
                        <h2>R$100,00 <span>mês</span></h2>
                        <div className="features">
                            <p>4 Reuniões de acompanhamento
                            ao mes</p>
                            <p>3 treino personalizado ao mes</p>
                        </div>
                        <button>Assinar</button>
                    </div>
                </div>
            </div>
            <footer>
                <img  src={logo} alt="Logo" />
            </footer>
        </div>
    );
}

export default Home;