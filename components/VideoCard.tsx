import { FC, useState, useRef } from 'react'

import Image from 'next/future/image'
import Link from 'next/link'

import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi'
import { BsPlay, BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'

import { Video } from '../interfaces/queries'

interface VideoCardProps {
  post: Video
}

const css = { width: '100%', height: 'auto' }

export const VideoCard: FC<VideoCardProps> = ({ post }) => {
  const [isHover, setIsHover] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [isVideoMuted, setIsVideoMuted] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  const onVideoPress = () => {
    if (playing) {
      videoRef.current?.pause()
      setPlaying(false)
      return
    }

    videoRef.current?.play()
    setPlaying(true)
  }

  return (
    <div className="flex flex-col pb-6 border-b-2 border-gray-200">
      <div>
        <div className="flex gap-3 p-2 font-semibold rounded cursor-pointer">
          <div className="w-10 h-10 md:w-16 md:h-16">
            <Link href="/">
              <a>
                <Image
                  width={62}
                  height={62}
                  className="rounded-full"
                  src={post.postedBy.image}
                  alt="Profile photo"
                  sizes="100vw"
                  style={css}
                />
              </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <div className="flex items-center gap-2">
                <p className="flex items-center gap-2 font-bold md:text-base text-primary">
                  {post.postedBy.userName}
                  {''}
                  <GoVerified className="text-base text-blue-400" />
                </p>
                <p className="hidden text-xs font-medium text-gray-500 capitalize md:block">
                  {post.postedBy.userName}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative flex gap-4 lg:ml-20">
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="rounded-3xl"
        >
          <Link href="/">
            <video
              ref={videoRef}
              loop
              className="lg:w-[600px] aspect-video w-[200px] md:w-[400px] rounded-2xl cursor-pointer bg-gray-100"
              src={post.video.asset.url}
              muted={isVideoMuted}
            />
          </Link>
          {isHover && (
            <div className="absolute flex gap-10 cursor-pointer bottom-6 left-8 md:left-14 lg:left-0 lg:justify-between w-[100px] md:w-[50px] p-3">
              {playing ? (
                <button onClick={onVideoPress}>
                  <BsFillPauseFill className="text-2xl text-black lg:text-4xl" />
                </button>
              ) : (
                <button onClick={onVideoPress}>
                  <BsFillPlayFill className="text-2xl text-black lg:text-4xl" />
                </button>
              )}
              {isVideoMuted ? (
                <button onClick={() => setIsVideoMuted(false)}>
                  <HiVolumeOff className="text-2xl text-black lg:text-4xl" />
                </button>
              ) : (
                <button>
                  <HiVolumeUp
                    onClick={() => setIsVideoMuted(true)}
                    className="text-2xl text-black lg:text-4xl"
                  />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
