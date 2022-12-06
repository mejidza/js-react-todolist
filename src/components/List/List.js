import styles from "./List.module.css"


function List({todos}) {
    console.log(todos)
    return (
     
      <ul className={styles.ulList}>
       {todos.map((item) => <li>{item.title}</li>)}
      </ul>
   
    );
  }
  
  export default List