import { useState } from "react";

const inputStyle = {
  borderRadius: "10px",
  width: "90%",
  height: "35px",
  marginLeft: "4%",
  fontSize: "16px",
};

const buttonStyle = {
  borderRadius: "10px",
  color: "white",
  backgroundColor: "blue",
  width: "40%",
  height: "40px",
  marginBottom: "10px",
  marginLeft: "55%",
  fontWeight: "bold",
};

const NameAndEmail = ({ children }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <label style={{ fontWeight: "bold", fontSize: "18px" }}>
        {children}
        <span style={{ color: "red" }}> *</span>
      </label>
      <div>
        <input
          style={inputStyle}
          type="text"
          placeholder={children}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

const Password = ({ children }) => {
  const [input, setInput] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div>
      <label style={{ fontWeight: "bold", fontSize: "18px" }}>
        {children}
        <span style={{ color: "red" }}> *</span>
      </label>
      <div>
        <input
          style={inputStyle}
          type="password"
          placeholder={children}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (input.length < 8) {
              //But there is a problrm due to useState delay which needs re-rendering to respond
              console.log(input);
              console.log(input.length);
              setComment("Password should be at least 8 characters");
            } else if (input.length >= 8) {
              //But there is a problrm due to useState delay which needs re-rendering to respond
              console.log(input);
              console.log(input.length);
              setComment("");
            }
          }}
        />
      </div>
      <div style={{ color: "red", marginLeft: "5%" }}>{comment}</div>
    </div>
  );
};

const Role = ({ children }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <label style={{ fontWeight: "bold", fontSize: "18px" }}>
        {children}
        <span style={{ color: "red" }}> *</span>
      </label>
      <div>
        <input
          style={inputStyle}
          type="text"
          placeholder={children}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

const RegistartionFormAmin = () => {
  return (
    <>
      <p className="titles-style">Registartion Form in React (Amin)</p>
      <div style={{ border: "solid" }}>
        <h2>Sign Up</h2>
        <form>
          <p>
            <NameAndEmail>First name</NameAndEmail>
          </p>
          <p>
            <NameAndEmail>Last name</NameAndEmail>
          </p>
          <p>
            <NameAndEmail>Email address</NameAndEmail>
          </p>
          <p>
            <Password>Password</Password>
          </p>
          <p>
            <Role>Role</Role>
          </p>
        </form>

        <button style={buttonStyle}>CREATE ACCOUNT</button>
      </div>
    </>
  );
};

export default RegistartionFormAmin;
