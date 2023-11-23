import { useState } from "react";

function GoalForm() {
  const [formData, setFormData] = useState({
    goal: "",
    by: "",
  });
  const [allGoals, updateAllGoals] = useState([]);

  function ChangeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //If setFormData(e.target.value) => formaData value = last input value literally according you modified which property value
    //If setFormData({[e.target.name]: e.target.value}) => formData value = last input value as an object property {...: 'value'} according you modified which property value
    //If setFormData({ ...formData, [e.target.name]: e.target.value }); => formData value = last input value for the whole onject with its propeerties {...: 'value', ...:'value'}
    //regardless of which value you modified
    console.log(formData);
  }

  function SubmitHandler(e) {
    e.preventDefault();
    updateAllGoals([
      ...allGoals,
      <ul>
        <li>{`My goal is to ${formData.goal}, by ${formData.by}.`}</li>
      </ul>,
    ]);

    //Previous output is:
    //<ul><li>My goal is to {formData.goal}, by {formData.by}.<li/></ul>
    //<ul><li>My goal is to {formData.goal}, by {formData.by}.<li/></ul>
    //<ul><li>My goal is to {formData.goal}, by {formData.by}.<li/></ul>
    // Meta method is more accurate.
    //You can see it more clear if it was <ol></ol>

    setFormData({
      goal: "",
      by: "",
    });
  }

  return (
    <>
      <p className="titles-style">useState hook in React (Amin)</p>
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
        <div>{allGoals}</div>
      </form>
    </>
  );
}

export default GoalForm;
