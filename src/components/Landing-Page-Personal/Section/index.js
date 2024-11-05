import React from "react";
import personalImage from "../../../assets/luis-personal-img-3.jpg"; // Caminho correto da imagem
import image1 from "../../../assets/luis-personal-img-1.jpg"; // Primeira imagem
import image2 from "../../../assets/luis-personal-img-2.jpg"; // Segunda imagem
import image3 from "../../../assets/luis-personal-img-3.jpg"; // Terceira imagem (caso queira utilizar)
import "../../../global.css"; // Importando o CSS global
import "./section.css";

function Section() {
  return (
    <section id="treinos">
      <h2>Treinos Personalizados para Todos os Objetivos</h2>
      <p>
        Com um método exclusivo e comprovado, ajudamos você a atingir seus
        objetivos de forma rápida e saudável.
      </p>

      <div className="presentation">
        <div className="text-container">
          <div className="image-container">
            <img src={personalImage} alt="Personal Trainer Luis Otavio" />
          </div>
          <h3>Sobre o Personal Trainer Luis Otavio</h3>
          <p>
            Luis Otavio é um personal trainer dedicado e apaixonado por ajudar
            seus clientes a alcançarem seus objetivos. Com anos de experiência e
            um método inovador, ele proporciona um acompanhamento personalizado
            que se adapta às necessidades de cada aluno.
          </p>
          <button className="schedule-button">
            Agende uma avaliação on-line
          </button>
        </div>
      </div>

      {/* Seção para as imagens abaixo */}
      <div className="images-row">
        <img src={image1} alt="Luis Personal 1" />
        <img src={image2} alt="Luis Personal 2" />
        <img src={image3} alt="Luis Personal 3" />
      </div>

      <div className="treino-tipo">
        <h3>Treinos de Força</h3>
        <p>
          Desenvolva músculos e aumente sua força com treinos adaptados ao seu
          nível.
        </p>
      </div>

      <div className="treino-tipo">
        <h3>Treinos para Emagrecimento</h3>
        <p>
          Queime gordura e melhore sua saúde com programas de treino
          específicos.
        </p>
      </div>

      <div className="treino-tipo">
        <h3>Condicionamento Físico</h3>
        <p>Melhore sua resistência e desempenho com treinos desafiadores.</p>
      </div>

      <div className="testemunhos">
        <h3>O que nossos clientes dizem</h3>
        <p>
          "Graças ao [Nome do Personal Trainer], alcancei meu objetivo de forma
          rápida e segura!" - Cliente Satisfeito
        </p>
        <img src="caminho/para/imagem-cliente.jpg" alt="Cliente Satisfeito" />
      </div>
    </section>
  );
}

export default Section;
