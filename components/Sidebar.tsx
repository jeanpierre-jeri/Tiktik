import { useState } from 'react'

import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { GoogleLogin } from '@react-oauth/google'
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'

import { Discover, SuggestedAccounts, Footer } from './'

export function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true)
  const [userProfile, setUserProfile] = useState(false)

  const handleClick = () => {
    setShowSidebar((prevState) => !prevState)
  }

  // const login = useGoogleLogin({
  //   onSuccess: (tokenResponse) => console.log(tokenResponse),
  //   onError: () => {}
  // })

  const normalLink = `flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#f51997] rounded`

  return (
    <div>
      <div onClick={handleClick} className="block m-2 mt-3 ml-4 text-xl xl:hidden">
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="flex flex-col justify-start w-20 p-3 mb-10 border-r-2 border-gray-100 xl:w-400 xl:border-0">
          <div className="border-gray-200 xl:border-b-2 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="hidden text-xl xl:block">For you</span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className="hidden px-2 py-4 xl:block">
              <p className="text-gray-400">Log in to like and comment on videos</p>
              <div className="pr-4">
                {/* <button
                  type="button"
                  className="bg-white text-lg text-[#f51997] border border-[#f51997] font.semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#f51997] cursor-pointer"
                  onClick={() => login()}
                >
                  Log in
                </button> */}
                <GoogleLogin theme="outline" onSuccess={() => {}} onError={() => {}} />
              </div>
            </div>
          )}
          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  )
}
