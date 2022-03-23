import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>

      <ul className={styles.flex}>
        <li>
          <label>
            <input type="text" placeholder="Ne aramak istiyorsun?"></input>
          </label>
        </li>
        <li>
          <a>Başlık Oluştur</a>
        </li>
        <li>
          <a>alert</a>
        </li>
        <li>
          <a>message</a>
        </li>
        <li>
          <a>Giriş Yap / Kaydol</a>
        </li>
        <li></li>
      </ul>
    </header>
  );
};

export default Header;
