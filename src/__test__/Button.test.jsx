import { render, fireEvent } from "@testing-library/react";
import Button from "../components/Button/Button";

describe("Button", () => {
  it("renders the button with the correct text", () => {
    const { getByText } = render(<Button className="test">Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button className="test" onClick={handleClick}>
        Click me
      </Button>
    );

    fireEvent.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("is disabled when the disabled prop is true", () => {
    const { getByText } = render(
      <Button className="test" disabled>
        Click me
      </Button>
    );

    expect(getByText("Click me")).toBeDisabled();
  });

  it("has the correct class", () => {
    const { getByText } = render(<Button className="test">Click me</Button>);
    expect(getByText("Click me")).toHaveClass("test");
  });
});
