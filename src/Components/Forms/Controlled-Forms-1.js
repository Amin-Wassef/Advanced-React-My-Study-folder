import { useState } from "react";

function ControlledForms1() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    //This function can be added to onSubmit event in form element
    //Or to onClick event in button element
    //The result will be the same
    e.preventDefault(); //Prevent the default action of HTML
    setName(""); //Restore input value to default after submission
    console.log(`Form submitted!\nThe name is: ${name}`);
  };

  return (
    <>
      <p className="titles-style">Controlled Forms in React (1)</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              style={{ width: "394px" }}
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button style={{ width: "100%" }} disabled={!name} type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </>
    //input id is to be used in lable element htmlFor to allow the lable to activate the disabled input
    //for attribute is reserved for HTML so we use htmlFor in React
    //disabled is to disable the button if no names written
  );
}

export default ControlledForms1;
