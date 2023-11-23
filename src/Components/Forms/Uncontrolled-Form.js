import { useRef } from "react";

const UncontrolledForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    inputRef.current.value();
  };
  return (
    <>
      <p className="titles-style">Unontrolled Forms in React</p>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
      </form>
    </>
  );
};

export default UncontrolledForm;
