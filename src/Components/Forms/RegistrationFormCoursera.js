import { useState } from "react";
import { validateEmail } from "../../utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError" style={{ color: "red", marginLeft: "4%" }}>
      Password should have at least 8 characters
    </p>
  );
};

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
  marginTop: "15px",
  marginBottom: "1px",
  marginLeft: "55%",
  fontWeight: "bold",
};

function RegistartionFormCoursera() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${firstName} ${lastName}'s Account created!`);
    clearForm();
  };

  return (
    <div>
      <p className="titles-style">Registartion Form in React (Amin)</p>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: "solid" }}>
          <h2>Sign Up</h2>
          <div className="Field">
            <label
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              First name <sup style={{ color: "red" }}>*</sup>
            </label>
            <input
              style={inputStyle}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
            />
          </div>
          <div className="Field">
            <label
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Last name
            </label>
            <input
              style={inputStyle}
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last name"
            />
          </div>
          <div className="Field">
            <label
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Email address <sup style={{ color: "red" }}>*</sup>
            </label>
            <input
              style={inputStyle}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email address"
            />
          </div>
          <div className="Field">
            <label
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Password <sup style={{ color: "red" }}>*</sup>
            </label>
            <input
              style={inputStyle}
              value={password.value}
              type="password"
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                //triggers when focus is lost from the input element in context
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Password"
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <div>
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Role <sup style={{ color: "red" }}>*</sup>
              </label>
            </div>
            <select
              value={role}
              style={inputStyle}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              disabled={!getIsFormValid()}
              style={buttonStyle}
            >
              CREATE ACCOUNT
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default RegistartionFormCoursera;
