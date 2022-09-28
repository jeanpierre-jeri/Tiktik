import { FC } from 'react'
import { footerList1, footerList2, footerList3 } from '../utils/constants'

interface ListProps {
  list: string[]
  mt?: boolean
}

const List: FC<ListProps> = ({ list, mt = true }) => (
  <div className={`flex flex-wrap gap-2 ${mt ? 'mt-5' : ''}`}>
    {list.map((item, index) => (
      <p key={index} className="text-sm text-gray-400 cursor-pointer hover:underline">
        {item}
      </p>
    ))}
  </div>
)

export function Footer() {
  return (
    <div className="hidden mt-6 xl:block">
      <List list={footerList1} mt={false} />
      <List list={footerList2} />
      <List list={footerList3} />
      <p className="mt-5 text-sm text-gray-400">2022 TikTik</p>
    </div>
  )
}
