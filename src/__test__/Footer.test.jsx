import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import Footer from "../components/Footer/Footer";

jest.mock("next/router");

describe("Footer", () => {
  it("renders the footer when pathname is not '/login'", () => {
    useRouter.mockReturnValue({ pathname: "/home" });
    const { getByText } = render(<Footer />);
    expect(getByText("Where you can begin your journey")).toBeInTheDocument();
    expect(getByText("© 2024 Startup Community")).toBeInTheDocument();
  });

  it("does not render the footer when pathname is '/login'", () => {
    useRouter.mockReturnValue({ pathname: "/login" });
    const { queryByText } = render(<Footer />);
    expect(queryByText("Where you can begin your journey")).toBeInTheDocument();
    expect(queryByText("© 2024 Startup Community")).toBeInTheDocument();
  });
});
