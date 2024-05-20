import { render } from "@testing-library/react";
import NavLink from "../components/NavBar/Links/NavLink/NavLink";

describe("NavLink", () => {
  it("renders the link with the correct name and path", () => {
    const item = { name: "Test", path: "/test" };
    const { getByRole } = render(<NavLink item={item} />);

    const link = getByRole("link", { name: item.name });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", item.path);
  });

  it("applies the correct styles", () => {
    const item = { name: "Test", path: "/test" };
    const { getByRole } = render(<NavLink item={item} />);

    const link = getByRole("link", { name: item.name });
    expect(link.parentElement).toHaveClass("container");
    expect(link).toHaveClass("link");
  });
});
