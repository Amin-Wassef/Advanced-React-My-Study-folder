import { useState } from "react";

function GoalForm(props) {
  //First function (Creating the form)
  const [formData, setFormData] = useState({
    goal: "",
    by: "",
  });

  function ChangeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //If setFormData(e.target.value) => formData value = last input value literally according you modified which property value
    //If setFormData({[e.target.name]: e.target.value}) => formData value = last input value as an object property {...: 'value'} according you modified which property value
    //If setFormData({ ...formData, [e.target.name]: e.target.value }); => formData value = last input value for the whole object with its properties {...: 'value', ...:'value'}
    //regardless of which value you modified
    console.log(formData);
  }

  function SubmitHandler(e) {
    e.preventDefault();
    props.addGoal(formData);
    setFormData({
      goal: "",
      by: "",
    });
  }

  return (
    <>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          name="goal"
          placeholder="Goal"
          value={formData.goal}
          onChange={ChangeHandler}
        />
        <input
          type="text"
          name="by"
          placeholder="By..."
          value={formData.by}
          onChange={ChangeHandler}
        />
        <button>Submit Goal</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  //Second function (Creating the list)
  return (
    <ol>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}.
          </span>
        </li>
      ))}
    </ol>
  );
}

export default function GoalApp() {
  //Third function (Combinig both)
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(newGoal) {
    updateAllGoals([...allGoals, newGoal]);
  }

  return (
    <>
      <p className="titles-style">useState hook in React (Meta)</p>
      <GoalForm addGoal={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </>
  );
}
