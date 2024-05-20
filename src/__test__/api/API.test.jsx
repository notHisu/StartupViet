import {
  getNewsData,
  getPaginatedNewsData,
  getNewsDataBySlug,
  updateNewsById,
  deleteNewsById,
  addNews,
} from "@/app/api";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("News API", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("gets news data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "news data" }));

    const data = await getNewsData();

    expect(data).toEqual({ data: "news data" });
    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:3000/api/news/all",
      {
        cache: "no-store",
      }
    );
  });

  it("gets paginated news data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "paginated news data" }));

    const data = await getPaginatedNewsData(1, 10);

    expect(data).toEqual({ data: "paginated news data" });
    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:3000/api/news/paginated?page=1&limit=10",
      {
        cache: "no-store",
      }
    );
  });

  it("gets news data by slug", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "news data by slug" }));

    const data = await getNewsDataBySlug("test-slug");

    expect(data).toEqual({ data: "news data by slug" });
    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:3000/api/news/test-slug",
      {
        cache: "no-store",
      }
    );
  });

  it("updates news by id", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "updated news" }));

    const data = await updateNewsById("test-id", { title: "Updated Title" });

    expect(data).toEqual({ data: "updated news" });
    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:3000/api/news/update/test-id",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: { title: "Updated Title" }, // Change this line
      }
    );
  });

  it("deletes news by id", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "deleted news" }));

    const data = await deleteNewsById("test-id");

    expect(data).toEqual({ data: "deleted news" });
    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:3000/api/news/delete/test-id",
      {
        method: "DELETE",
      }
    );
  });

  it("adds news", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "added news" }));

    const data = await addNews({ title: "New Title" });

    expect(data).toEqual({ data: "added news" });
    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:3000/api/news/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { title: "New Title" },
      }
    );
  });
});
