import { useState } from "react";
import styles from "./Form.module.css";
import addButtonImage from "../../img/add-button-image.png";

function Form({ addTodo }) {
  const [inputText, setInputText] = useState("");
  console.log(inputText);
  return (
    <form className={styles.formField}>
      <input
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        className={styles.input}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (inputText === "") {
            alert("Enter your todo");
            return;
          }
          addTodo(inputText);
        }}
        className={styles.button}
      >
        <img
          className={styles.addButton}
          src={addButtonImage}
          alt="add button"
        />
      </button>
    </form>
  );
}

export default Form;
