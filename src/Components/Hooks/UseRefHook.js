import { useRef } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <p className="titles-style">useRef hook in React</p>
      <input ref={inputEl} type="text" />
      <div>
        <button style={{ backgroundColor: "grey" }} onClick={onButtonClick}>
          Focus the input
        </button>
      </div>
    </>
  );
}

export default TextInputWithFocusButton;
