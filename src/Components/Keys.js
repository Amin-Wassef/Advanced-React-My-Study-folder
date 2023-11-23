import { useState } from "react";

const ToDo = (props) => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

function Keys() {
  const [todos, setTodos] = useState([
    {
      id: "todo 1",
      createdAt: "18:00",
    },
    {
      id: "todo 2",
      createdAt: "20:30",
    },
  ]);

  const reverseOrder = () => {
    //Reverse is a mutative operation, so we need to create a new array first.
    setTodos([...todos].reverse());
  };

  return (
    <div>
      <p className="titles-style">Keys in React</p>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <ToDo key={index} id={todo.id} createdAt={todo.createdAt} />
            //In this case the input content will not reverse
            //as its key is the index which is not suitable for order changing
          ))}
        </tbody>
      </table>
      <p>The previous table has a key problem due to reverse action.</p>
      <p>In the next table the problem should be resolved.</p>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo) => (
            <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
            //This is the solution of the above code
            //using a unique key value other than the index which id the id for example
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Keys;
