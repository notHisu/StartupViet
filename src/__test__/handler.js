import { rest } from "msw";

export const handlers = [
  rest.get("/api/news", (req, res, ctx) => {
    return res(ctx.json({ data: "news data" }));
  }),
  rest.get("/api/news/paginated", (req, res, ctx) => {
    return res(ctx.json({ data: "paginated news data" }));
  }),
  // Add more handlers as needed
];
