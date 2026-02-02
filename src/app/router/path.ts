export const PATH = {
  home: "/",
  login: "/login",
  signup: "/signup",
  users: "/users",
  my: "/mypage",
  userDetail: (id: string | number) => `/users/${id}`,
} as const;
