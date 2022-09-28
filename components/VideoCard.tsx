import { FC } from 'react'
import { Video } from '../interfaces/queries'

interface VideoCardProps {
  post: Video
}

export const VideoCard: FC<VideoCardProps> = ({ post }) => {
  return <div>VideoCard</div>
}
