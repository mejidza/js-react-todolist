import { useState } from "react";
import styles from "./Form.module.css"


function Form({addTodo}) {
  const [inputText, setInputText] = useState("")
  console.log(inputText)
    return (
     
      <form>
        <input onChange={(e) => setInputText(e.target.value)} value={inputText} className={styles.input}/>
        <button onClick={(e) => {
          e.preventDefault()
          addTodo(inputText)
          
          }} className={styles.button}>Add</button>
      </form>
   
    );
  }
  
  export default Form