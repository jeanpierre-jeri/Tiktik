import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd } from 'react-icons/io'

import logo from '../utils/tiktik-logo.png'

export function Navbar() {
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
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
    </div>
  )
}
