import { render, screen } from "@testing-library/react";
import List from "../components/List/ItemColumn/ItemColumn";

describe("List", () => {
  it("renders the item title and content", () => {
    const item = {
      _id: "1",
      title: "Test Title",
      note: "Test Note",
      username: "Test User",
      img: "https://fakeimg.pl/1000x700",
      content: "Test Content",
      date: "2022-01-01",
    };

    render(<List item={item} />);

    const title = screen.getByText("Test Title");
    expect(title).toBeInTheDocument();

    const content = screen.getByText("Test Content");
    expect(content).toBeInTheDocument();
  });

  // Add more tests as needed
});
