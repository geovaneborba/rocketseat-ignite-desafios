import styles from "./Header.module.scss";

import logo from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Imagem que contém um ícone de foguete" />
      <h3>
        to<span>do</span>
      </h3>
    </header>
  );
}
