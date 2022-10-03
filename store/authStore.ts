import create from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import axios from 'axios'
import { User } from '../utils'

export type AddUser = (user: User) => void
export type RemoveUser = () => void

export interface AuthStore {
  userProfile: User | null
  addUser: AddUser
  removeUser: RemoveUser
}

const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        userProfile: null,
        addUser: (user: User) => set({ userProfile: user }),
        removeUser: () => set({ userProfile: null })
      }),
      {
        name: 'auth'
      }
    )
  )
)

export default useAuthStore
