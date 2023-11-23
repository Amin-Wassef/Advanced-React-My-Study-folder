function Dialog(props) {
  return (
    <>
      <p className="titles-style">props.children (Dialog) </p>
      <div
        className="modal"
        style={{
          margin: "auto",
          backgroundColor: "lemonchiffon",
          border: "solid",
          borderColor: "black",
          borderWidth: "3px",
          width: "50%",
          height: "120px",
        }}
      >
        {props.children}
      </div>
    </>
  );
}

function ConfirmationDialog() {
  return (
    <Dialog color="bleu">
      <div style={{ textAlign: "center" }}>
        <h2 className="Dialog-title">Thanks!</h2>
        <p className="Dialog-message">
          We will confirm your request in an email message.
        </p>
      </div>
    </Dialog>
  );
}

export default ConfirmationDialog;
