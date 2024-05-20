import { render, fireEvent } from "@testing-library/react";
import { useSession, signIn, signOut } from "next-auth/react";
import NavBar from "../components/NavBar/NavBar";
jest.mock("next-auth/react");

describe("NavBar", () => {
  beforeEach(() => {
    useSession.mockReturnValue({ data: { user: { name: "Test User" } } });
    signIn.mockImplementation(jest.fn());
    signOut.mockImplementation(jest.fn());
  });

  it("renders the logo", () => {
    const { getByAltText } = render(<NavBar />);
    expect(getByAltText("logo")).toBeInTheDocument();
  });

  it("shows the Login button when the user is not logged in", () => {
    useSession.mockReturnValue({ data: null });
    const { getByText } = render(<NavBar />);
    expect(getByText("Login")).toBeInTheDocument();
  });

  it("shows the Logout button and user name when the user is logged in", () => {
    useSession.mockReturnValue({ data: { user: { name: "Test User" } } });
    const { getByText } = render(<NavBar />);
    expect(getByText("Logout")).toBeInTheDocument();
    expect(getByText("Test User")).toBeInTheDocument();
  });

  it("calls signIn function when Login button is clicked", () => {
    useSession.mockReturnValue({ data: null });
    const { getByText } = render(<NavBar />);
    fireEvent.click(getByText("Login"));
    expect(signIn).toHaveBeenCalled();
  });

  it("calls signOut function when Logout button is clicked", () => {
    useSession.mockReturnValue({ data: { user: { name: "Test User" } } });
    const { getByText } = render(<NavBar />);
    fireEvent.click(getByText("Logout"));
    expect(signOut).toHaveBeenCalled();
  });
});
