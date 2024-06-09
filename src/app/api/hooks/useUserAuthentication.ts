export async function useUserAuthentication(username: string, password: string) {
  try {
    const res = await fetch("http://localhost:3000/api/user/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        password: password,
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Authentication failed");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    // You can replace this with your own error handling code
    throw error;
  }
}