import React from 'react';
import './Footer.css'; // Importamos el archivo CSS correspondiente

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        {/* Enlaza tus redes sociales aquí */}
        <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
        </a>
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
        </a>
        <a href="https://facebook.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
        </a>
      </div>
      <p>&copy; 2024 - Tu Nombre | Contacto: +1234567890</p>
    </footer>
  );
};

export default Footer;
