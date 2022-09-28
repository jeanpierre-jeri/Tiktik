import { FC } from 'react'

interface NoResultsProps {
  text: string
}

export const NoResults: FC<NoResultsProps> = ({ text }) => {
  return <div>{text}</div>
}
