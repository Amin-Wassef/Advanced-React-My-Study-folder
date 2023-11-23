import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
//As the component I Want to test is already included in App.js though import so I can import App instead of the component itself

import ControlledForms2 from "./Components/Forms/Controlled-Forms-2";
//Or like here I can import the component itsel to test it directly

test("renders: From the speaches of saint Bersonofios, link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    "From the speaches of saint Bersonofios"
  );
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.closest("a")).toHaveAttribute(
    "href",
    "https://www.youtube.com/watch?v=gRpB_LcpFDY"
    //https://stackoverflow.com/questions/57827126/how-to-test-anchors-href-with-react-testing-library
  );
});

describe("ControlledForms2", () => {
  test("Submission is disabled if !{score && comment}", () => {
    const handleSubmit = jest.fn();
    render(<ControlledForms2 onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/); // => means "Score: {score}" => means "Score: 10" => means Score & its value
    fireEvent.change(rangeInput, { target: { value: "4" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });

  test("User is able to submit the form if the score is <= 5 and comment is >20 characters", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    const textArea = screen.getByLabelText(/Comments:/);
    fireEvent.change(textArea, { target: { value: comment } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
      /**
       * if it could submit without comment so it would be:
       * score,
       * comment: "",
       */
    });
  });
});
