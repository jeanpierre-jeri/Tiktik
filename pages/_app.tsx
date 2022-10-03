import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google'

import { Navbar, Sidebar } from '../components'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_ID as string}>
        <Navbar />
        <div className="flex gap-6 md:gap-20">
          <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
            <Sidebar />
          </div>
          <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
            <Component {...pageProps} />
          </div>
        </div>
      </GoogleOAuthProvider>
    </div>
  )
}

export default MyApp
