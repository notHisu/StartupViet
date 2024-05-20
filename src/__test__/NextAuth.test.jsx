import { options } from "../app/api/auth/[...nextauth]/options";

describe("NextAuth options", () => {
  it("should have the correct providers", () => {
    expect(options.providers).toHaveLength(2);

    const [githubProvider, credentialsProvider] = options.providers;

    // Test GitHubProvider
    expect(githubProvider).toHaveProperty("id", "github");
    expect(githubProvider).toHaveProperty("name", "GitHub");
    expect(githubProvider).toHaveProperty("type", "oauth");

    // Test CredentialsProvider
    expect(credentialsProvider).toHaveProperty("id", "credentials");
    expect(credentialsProvider).toHaveProperty("name", "Credentials");
    expect(credentialsProvider).toHaveProperty("type", "credentials");
  });

  it("should correctly authorize users", async () => {
    const [, credentialsProvider] = options.providers;
    const { authorize } = credentialsProvider.options;

    const user = await authorize({ username: "test", password: "test" });
    expect(user).toEqual({ id: "1", name: "test", password: "test" });

    const invalidUser = await authorize({
      username: "invalid",
      password: "invalid",
    });
    expect(invalidUser).toBeNull();
  });
});
