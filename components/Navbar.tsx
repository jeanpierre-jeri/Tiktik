import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd } from 'react-icons/io'

import logo from '../utils/tiktik-logo.png'
import { createOrGetUser } from '../utils/index'

import useAuthStore from '../store/authStore'

export function Navbar() {
  const user = false
  const { userProfile, addUser } = useAuthStore()

  return (
    <div className="flex items-center justify-between w-full px-4 py-2 border-b-2 border-gray-200">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="cursor-pointer"
            src={logo}
            alt="Tiktik"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Link>

      <div>SEARCH</div>
      <div>
        {user ? (
          <div>Logged in</div>
        ) : (
          <GoogleLogin onSuccess={createOrGetUser} onError={() => console.log('Error ')} />
        )}
      </div>
    </div>
  )
}
