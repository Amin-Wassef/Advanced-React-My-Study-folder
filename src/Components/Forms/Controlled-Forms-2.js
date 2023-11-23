import { useState } from "react";
import star from "../../Assets/Star.png";

function ControlledForms2() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");
  const [conclusion, setConclusion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length < 20) {
      alert(
        "Please provide a comment not less than '20 characters' concerning why is your poor experience."
      );
    } else {
      setScore("10");
      setComment("");

      setConclusion(
        <>
          <div>Score: {score}</div>
          <div>Comment: {comment}</div>
        </>
      );
      console.log(
        `Submitted sucssesfuly.\nScore: ${score}\nComment: ${comment}`
      );
      setTimeout(() => {
        setConclusion("");
      }, 5000);
    }
  };

  return (
    <>
      <p className="titles-style">Controlled Forms in React (2)</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>

          <label style={{ fontWeight: "bold" }}>
            Score: {score} <img height={16} width={16} src={star} alt="Star" />
            <input
              style={{ width: "100%", accentColor: "green" }}
              type="range"
              min={"0"}
              max={"10"}
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </label>

          <label>Comment: </label>
          <textarea
            style={{ width: "100%", height: "100px" }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button style={{ width: "100%" }} disabled={!comment} type="submit">
            Submit
          </button>
          <div>{conclusion}</div>
        </fieldset>
      </form>
    </>
  );
}

export default ControlledForms2;
