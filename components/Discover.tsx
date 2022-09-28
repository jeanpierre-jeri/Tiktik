import Link from 'next/link'
import { useRouter } from 'next/router'

import { topics } from '../utils/constants'

export function Discover() {
  const router = useRouter()

  const { topic } = router.query

  const topicStyle = `xl:border-2  hover:bg-primary px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer`

  return (
    <div className="pb-6 xl:border-b-2 xl:border-gray-200">
      <p className="hidden m-3 mt-4 font-semibold text-gray-500 xl:block">Popular Topics</p>

      <div className="flex flex-wrap gap-3">
        {topics.map(({ name, icon }) => (
          <Link key={name} href={`/?topic=${name}`}>
            <div
              className={`${topicStyle} ${
                name === topic
                  ? 'xl:border-[#f51997] text-[#f51997]'
                  : 'xl:boder-gray-300 text-black'
              }`}
            >
              <span className="text-2xl font-bold xl:text-base">{icon}</span>
              <span className="hidden text-base font-medium capitalize xl:block">{name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
