import "@testing-library/jest-dom";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import HomePage from "@/app/page";
import { useSession } from "next-auth/react";

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
});

// Mock the useSession hook from next-auth
jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

// Mock the getNewsData and getPaginatedNewsData functions
jest.mock("@/app/api", () => {
  // Define getNewsData and getPaginatedNewsData
  const getNewsData = jest.fn();
  const getPaginatedNewsData = jest.fn();

  return {
    __esModule: true,
    getNewsData,
    getPaginatedNewsData,
  };
});

describe("HomePage", () => {
  beforeEach(() => {
    // Set up default mocks
    useSession.mockReturnValue({ data: null });
    require("@/app/api").getNewsData.mockResolvedValue([]);
    require("@/app/api").getPaginatedNewsData.mockResolvedValue([]);
  });

  it("renders without crashing", () => {
    render(<HomePage />);
    expect(screen.getByText("Startup (noun):")).toBeInTheDocument();
  });

  it("shows the Create News button when the user is logged in", async () => {
    // Set up mock for logged in user
    useSession.mockReturnValue({
      data: { user: { name: "Test User" } },
    });

    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText("Create News")).toBeInTheDocument();
    });
  });

  // Add more tests here
});
