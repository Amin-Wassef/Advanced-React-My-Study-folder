function Button({ type, children, ...buttonProps }) {
  const className = type === "primary" ? "Primary button" : "Secondary button";
  return (
    <>
      <button
        style={{ height: "30px" }}
        className={`Button ${className}`}
        {...buttonProps}
      >
        {children}
      </button>
    </>
  );
}

function LoginButton({ type, children, ...buttonProps }) {
  return (
    <>
      <Button
        type="secondary"
        {...buttonProps}
        //The position of the ... before onCLick prevented its resigning
        onClick={() => {
          alert("Logging in!");
        }}
        // {...buttonProps}
        // In this position as onClick is before the ... so onClick resigning affect its value
      >
        {children}
      </Button>
    </>
  );
}

//The previous function could be neglected and the "Log in" Button could be called directly as shown in the "Sign up" Button case, but take care of the onClick value

function AllButtons() {
  return (
    <>
      <p className="titles-style">Spread Operator ... in React</p>
      <p>
        <Button type="primary" onClick={() => alert("Signing up")}>
          Sign up
        </Button>
      </p>
      <p>
        <LoginButton type="secondary" onClick={() => alert("Signing in")}>
          Log in
        </LoginButton>
      </p>
    </>
    //Adding new item (here is props) without ... => Means that the ... is considered comming after the new items
  );
}

export default AllButtons;
