export async function getNewsData() {
  try {
    const res = await fetch("http://localhost:3000/api/news/all", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Something went wrong!");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    // You can replace this with your own error handling code
    throw error;
  }
}

export async function getPaginatedNewsData(page: number, limit: number) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/news/paginated?page=${page}&limit=${limit}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Something went wrong!");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    // You can replace this with your own error handling code
    throw error;
  }
}

export async function getNewsDataBySlug(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/news/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Something went wrong!");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    // You can replace this with your own error handling code
    throw error;
  }
}

export async function updateNewsById(slug: string, data: any) {
  try {
    const res = await fetch(`http://localhost:3000/api/news/update/${slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    if (!res.ok) {
      throw new Error("Something went wrong!");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    // You can replace this with your own error handling code
    throw error;
  }
}

export async function deleteNewsById(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/news/delete/${slug}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Something went wrong!");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    // You can replace this with your own error handling code
    throw error;
  }
}

export async function addNews(data: any) {
  try {
    const res = await fetch("http://localhost:3000/api/news/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    if (!res.ok) {
      throw new Error("Something went wrong!");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    // You can replace this with your own error handling code
    throw error;
  }
}
