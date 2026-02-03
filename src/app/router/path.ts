export const PATH = {
  home: '/',
  login: '/login',
  signup: '/signup',
  users: '/users',
  my: '/mypage',
  team: {
    create: '/team/create',
    detail: (teamId: string | number) => `/team/${teamId}`,
    developer: (teamId: string | number, userId: string | number) =>
      `/team/${teamId}/developer/${userId}`,
  },
} as const
