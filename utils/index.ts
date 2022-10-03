import { CredentialResponse } from '@react-oauth/google'
import { decodeToken } from 'react-jwt'
import axios from 'axios'
import { Data } from '../pages/api/auth'
import { AddUser } from '../store/authStore'

interface decodedProps {
  name: string
  picture: string
  sub: string
}

export interface User {
  _id: string
  _type: string
  userName: string
  image: string
}

export const createOrGetUser = async (response: CredentialResponse, addUser: AddUser) => {
  const decoded = decodeToken<decodedProps>(response.credential as string)

  const { name, picture, sub } = decoded as decodedProps

  const user: User = {
    _id: sub,
    _type: 'user',
    userName: name,
    image: picture
  }

  addUser(user)

  const { data } = await axios.post<Data>(`/api/auth`, user)

  console.log(data)
}
