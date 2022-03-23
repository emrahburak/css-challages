import styles from "./Header.module.scss";
import Image from 'next/image';
import onedio from './xonedio.png';

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
          <span></span>
          <a>Başlık Oluştur</a>
        </li>
        <li>
          <a></a>
          <a></a>
        </li>
        <li>
          <a>message</a>
        </li>
        <li>
          <a>Giriş Yap / Kaydol</a>
        </li>
        <li>
          <Image src={onedio} width="78px" height="20px"/>
        </li>
      </ul>
    </header>
  );
};

export default Header;
