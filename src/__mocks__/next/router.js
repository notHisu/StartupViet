const useRouter = jest.fn();
const router = {
  push: jest.fn().mockResolvedValue({}),
  replace: jest.fn().mockResolvedValue({}),
  prefetch: jest.fn(),
  route: "/",
  pathname: "",
  query: "",
  asPath: "",
};

useRouter.mockImplementation(() => router);

export { useRouter };
