import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "./testServer";
import NewsPage from "@/app/news/page";
import { TextEncoder, TextDecoder } from "text-encoding";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("NewsPage", () => {
  it("renders news data", async () => {
    render(<NewsPage />);

    // Wait for the news data to be fetched
    await waitFor(() => {
      expect(screen.getByText("Be Good to the World")).toBeInTheDocument();
    });

    // Check that the news items are rendered
    expect(screen.getByText("News Item 1")).toBeInTheDocument();
    expect(screen.getByText("News Item 2")).toBeInTheDocument();
  });

  it("handles fetch errors", async () => {
    // Override the default handlers to force an error
    server.use(
      rest.get("/api/news", (req, res, ctx) => {
        return res(ctx.status(500));
      }),
      rest.get("/api/news/paginated", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<NewsPage />);

    // Wait for the error to be logged
    await waitFor(() => {
      expect(console.error).toHaveBeenCalled();
    });
  });
});
