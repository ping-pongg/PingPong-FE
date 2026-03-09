import { create } from 'zustand'

interface TeamRoleState {
  role: string | null
  setRole: (role: string) => void
}

export const useTeamRoleStore = create<TeamRoleState>((set) => ({
  role: null,
  setRole: (role) => set({ role }),
}))
