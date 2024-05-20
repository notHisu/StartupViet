import { render } from "@testing-library/react";
import Links from "../components/NavBar/Links/Links";

describe("Links", () => {
  it("renders the correct number of links", () => {
    const { getAllByRole } = render(<Links />);
    const links = getAllByRole("link");
    expect(links).toHaveLength(5);
  });

  it("renders the correct link names", () => {
    const { getByText } = render(<Links />);
    expect(getByText("News")).toBeInTheDocument();
    expect(getByText("Spaces")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("renders the correct link paths", () => {
    const { getAllByRole } = render(<Links />);
    const links = getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "/news");
    expect(links[1]).toHaveAttribute("href", "/spaces");
    expect(links[2]).toHaveAttribute("href", "/contact");
    expect(links[3]).toHaveAttribute("href", "/about");
    expect(links[4]).toHaveAttribute("href", "/test");
  });
});
