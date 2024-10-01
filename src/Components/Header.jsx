import React from 'react';
import { motion } from 'framer-motion';  // Asegúrate de haber instalado framer-motion
import './Header.css';  // Si decides usar un archivo CSS aquí

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Portafolio Juan José Gómez</h1>
      <p>Ingeniero Multimedia | Desarrollador Frontend | Creativo</p>
    </motion.header>
  );
};

export default Header;
