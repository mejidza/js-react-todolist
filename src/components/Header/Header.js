import styles from "./Header.module.css"


function Header({title}) {
    return (
       <h1 className={styles.title}>{title}</h1>
    );
  }
  
  export default Header