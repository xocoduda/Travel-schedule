import React from 'react';

function Modal() {
  const abrirEnlace = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className="enlaces">
      <a href="url_de_terminos_y_condiciones" onClick={(evento) => { evento.preventDefault(); abrirEnlace('https://www.roberthalf.cl/terminos-y-condiciones-de-uso-de-sitio-web'); }}>Términos y Condiciones</a>
      <br />
      <a href="url_de_cookies" onClick={(evento) => { evento.preventDefault(); abrirEnlace('https://iso25000.com/index.php/politica-cookies'); }}>Cookies</a>
      <br />
      <a href="url_de_privacidad" onClick={(evento) => { evento.preventDefault(); abrirEnlace('https://www.wonder.legal/es/modele/politica-privacidad-sitio-web'); }}>Privacidad</a>
      <br />
      <a href="url_de_preguntas_frecuentes" onClick={(evento) => { evento.preventDefault(); abrirEnlace('https://www.dosmedia.com/son-las-faq-necesarias-para-mi-negocio/'); }}>Preguntas frecuentes</a>
    </div>
  );
}

export default Modal;
