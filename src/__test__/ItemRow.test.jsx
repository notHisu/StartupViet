import { render, screen } from "@testing-library/react";
import ItemRow from "../components/List/ItemRow/ItemRow";

describe("ItemRow", () => {
  it("renders the item note and content", () => {
    const item = {
      _id: "1",
      title: "Test Title",
      note: "Test Note",
      username: "Test User",
      img: "https://fakeimg.pl/1000x700",
      content: "Test Content",
      date: "2022-01-01",
    };

    render(<ItemRow item={item} />);

    const note = screen.getByText("Test Note");
    expect(note).toBeInTheDocument();

    const content = screen.getByText("Test Content");
    expect(content).toBeInTheDocument();
  });

  // Add more tests as needed
});
