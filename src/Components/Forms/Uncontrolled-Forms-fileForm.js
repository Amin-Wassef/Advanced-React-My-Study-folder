import { useRef } from "react";

const UncontrolledFileForm = () => {
  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fileInput.current.files();
  };

  return (
    <>
      <p className="titles-style">Uncontrolled File Forms in React</p>
      <form onSubmit={handleSubmit}>
        <input ref={fileInput} type="file" />
      </form>
    </>
  );
};

export default UncontrolledFileForm;
