import styles from "./List.module.css";
import confirmImage from "../../img/confirm-button-image.png";
import delImage from "../../img/delete-button-image.png";
function List({ todos }) {
  console.log(todos);
  return (
    <ul className={styles.ulList}>
      {todos.map((item) => (
        <li className={styles.liItem} key={item.id}>
          {item.title}
          <div className={styles.buttonContainer}>
            <button className={styles.delButton}>
              <img className={styles.deleteImage} src={delImage} />{" "}
            </button>
            <button className={styles.delButton}>
              <img className={styles.confirmImage} src={confirmImage} />{" "}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
