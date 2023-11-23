function Button({ children, backgroundColor }) {
  return (
    <>
      <button
        style={{
          textAlign: "center",
          backgroundColor,
          color: "whitesmoke",
          width: "40%",
          height: "40px",
          borderRadius: "10px",
          marginBottom: "10px",
          marginLeft: "30%",
          fontWeight: "bold",
        }}
      >
        {children}
      </button>
    </>
  );
}

function Delete() {
  return <Button backgroundColor={"red"}>Delete</Button>;
}

function Allert({ children }) {
  return (
    <>
      <div className="OverLay" />
      <div
        style={{
          margin: "auto",
          border: "solid",
          width: "50%",
          backgroundColor: "whitesmoke",
          borderRadius: "25px",
        }}
      >
        {children}
      </div>
    </>
  );
}

function Result() {
  return (
    <>
      <p className="titles-style">props.children (Manage Account Page)</p>
      <h1 style={{ textAlign: "center" }}>🍴 Welcome to our Restaurant 🍴</h1>
      <Allert>
        <div style={{ textAlign: "center" }}>
          <h2>Delete Account</h2>
          <p style={{ fontWeight: "bold" }}>
            Are you sure you want to proced? You will miss all your delicious
            recipes!
          </p>
        </div>
        <Delete />
      </Allert>
    </>
  );
}

export default Result;
