export type Role = 'Front' | 'Back' | 'PM' | 'QA'

export interface User {
  userId: number
  nickname: string
  email?: string
  role?: Role
  pofile?: string
}
