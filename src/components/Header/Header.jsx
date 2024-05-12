import React from 'react';
import styles from './Header.module.css';
import ilanChurch from '../../assets/ilan-church.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.headerBg}>
      <ul className={`${styles.networks} container`}>
        <li>
          <a href="https://api.whatsapp.com/send?phone=5521974281528">
            21 9 7428-1528
          </a>
        </li>
        <li>
          <a href="mailto:secretaria@ilan.org.br">secretaria@ilan.org.br</a>
        </li>
        <li>
          <a href="https://www.facebook.com/ilanbrasil/">Facebook</a>
        </li>
        <li>
          <a href="https://www.instagram.com/ilanchurch/">Instagram</a>
        </li>
      </ul>
      <nav className={`container`}>
        <img src={ilanChurch} alt="Ilan Church" width="200" height="100" />
        <ul className={`${styles.menu}`}>
          <NavLink to="/ondas/" end>
            Home
          </NavLink>
          {/* <NavLink to="/ondas/ficha-de-inscricao">Ficha de inscrição</NavLink> */}
          <NavLink to="/ondas/admin">Administração</NavLink>
          <NavLink to="/ondas/checkin">Checkin</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
