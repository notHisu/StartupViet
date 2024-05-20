import { render } from "@testing-library/react";
import Input from "../components/Input/Input";

describe("Input", () => {
  it("renders the input with the correct type, placeholder, and class", () => {
    const props = {
      type: "text",
      placeholder: "Test Placeholder",
      className: "test-class",
    };

    const { getByPlaceholderText } = render(<Input {...props} />);

    const input = getByPlaceholderText(props.placeholder);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", props.type);
    expect(input).toHaveClass("test-class");
  });
});
