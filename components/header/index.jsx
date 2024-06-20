import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Alex's Blog App</h3>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/add-blog"}>
          <li>Add Blog</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
