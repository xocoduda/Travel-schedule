import React from 'react';
import WishCookies from './WishCookies';
import linkedin from '../img/linkedin.png';
import git from '../img/git.jpg';
import instagram from '../img/instagram.png';
import twitter from '../img/twitter.png';
import facebook from '../img/facebook.png';

function Footer() {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <h2>Información</h2>
          <WishCookies />
        </div>
        <div className="box">
          <h2>Sobre mí</h2>
          <p>Técnico Superior en Desarrollo de Aplicaciones Web</p>
          <h2>Contacto</h2>
          <p>juan_xoco@hotmail.com</p>
        </div>
        <div className="box">
          <h2>Sígueme</h2>
          <div className="red-social">
            <a href="https://github.com/xocoduda" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <img src={git} alt="Icono Github" />
            </a>
            <a href="https://www.linkedin.com/in/ja-bg" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
              <img src={linkedin} alt="Icono Linkedin" />
            </a>
            <a href="https://www.instagram.com/juan.buenestado/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagram} alt="Icono Instagram" />
            </a>
            <a href="https://www.facebook.com/xoco.buenestadogomez" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebook} alt="Icono Facebook" />
            </a>
            <a href="https://twitter.com/juanbuenestado" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={twitter} alt="Icono Twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>
          <b>Juan Antonio Buenestado Gómez</b>
          {' '}
          &copy; 2024
        </small>
      </div>
    </footer>
  );
}

export default Footer;
