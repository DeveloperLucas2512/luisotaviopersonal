import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa"; // Ícone de menu
import imgHeader from "../../../assets/img-AI-2.webp";
import "../../../global.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Controle do menu sanduíche
  const dropdownRef = useRef(null); // Referência ao dropdown menu

  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Alterna o estado do menu
  };

  // Fecha o dropdown ao clicar fora dele
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.classList.contains("menu-icon")
    ) {
      setMenuOpen(false);
    }
  };

  // Event listener para fechar o menu quando clica fora
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="logo-container">
        <div className="sticky-header">
          <div className="background-logo">
            <img
              src={imgHeader}
              alt="Imagem do Personal Trainer"
              className="logo-img"
            />
          </div>

          {/* Links para as seções da página */}
          <nav className="header-links">
            <a href="#sobre" onClick={(e) => handleScroll(e, "#sobre")}>
              Sobre
            </a>
            <a href="#treinos" onClick={(e) => handleScroll(e, "#treinos")}>
              Treinos
            </a>
            <a
              href="#testemunhos"
              onClick={(e) => handleScroll(e, "#testemunhos")}
            >
              Testemunhos
            </a>
            <a href="#contato" onClick={(e) => handleScroll(e, "#contato")}>
              Contato
            </a>
            <FaBars className="menu-icon" onClick={toggleMenu} />
          </nav>

          {/* Menu dropdown para mobile */}
          {menuOpen && (
            <div className="dropdown-menu" ref={dropdownRef}>
              <a href="#sobre" onClick={(e) => handleScroll(e, "#sobre")}>
                Sobre
              </a>
              <a href="#treinos" onClick={(e) => handleScroll(e, "#treinos")}>
                Treinos
              </a>
              <a
                href="#testemunhos"
                onClick={(e) => handleScroll(e, "#testemunhos")}
              >
                Testemunhos
              </a>
              <a href="#contato" onClick={(e) => handleScroll(e, "#contato")}>
                Contato
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="cta">
        <h1>Treine com Luis Otávio</h1>
        <a href="#agendar" className="btn">
          Agende uma Avaliação Gratuita
        </a>
      </div>
    </header>
  );
}

export default Header;
