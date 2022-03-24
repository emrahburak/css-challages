import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div></div>

      <ul>
        <li>
          <label>
            <input type="text" placeholder="Ne aramak istiyorsun?"></input>
          </label>
        </li>
        <li>
          <span></span>
          <a>Başlık Oluştur</a>
        </li>
        <li>
          <a></a>
          <a></a>
        </li>
        <li>
          <a>Giriş Yap / Kaydol</a>
        </li>
      </ul>
      <div></div>
    </header>
  );
};

export default Header;
