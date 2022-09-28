import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { allPostsQuery } from '../utils/queries'
import { client } from '../utils/client'
import { Video } from '../interfaces/queries'
import { NoResults, VideoCard } from '../components'

interface HomeProps {
  videos: Video[]
}

const Home: NextPage<HomeProps> = ({ videos }) => {
  return (
    <div className="flex flex-col h-full gap-10 videos">
      {videos.length ? (
        videos.map((video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text="No Videos" />
      )}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = allPostsQuery()

  const posts = await client.fetch<Video[]>(query)

  return {
    props: { videos: posts }
  }
}

export default Home
