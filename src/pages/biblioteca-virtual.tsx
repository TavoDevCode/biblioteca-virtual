// import Link from 'next/link'

import { Library, MusicCard } from '@/components'
import { RecreationalFiles } from '@/interfaces'
import { getRecreationalFiles } from '@/utils/files'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps<{ recreationalFiles: RecreationalFiles[] }> = async () => {
  const recreationalFiles = getRecreationalFiles()

  return {
    props: { recreationalFiles }
  }
}

function Home({ recreationalFiles }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(recreationalFiles)

  return (
    <Library>
      <div className="flex flex-wrap justify-center items-center gap-10 p-10 h-5/6">
        {recreationalFiles.map(({ imgSong, songSrc, title }, index) => (
          <MusicCard
            key={index}
            imgSong={`/documents/${title}/${imgSong}`}
            songSrc={`/documents/${title}/${songSrc}`}
            subtitle={''}
            title={title.split(' - ')[0]}
          />
        ))}
      </div>
    </Library>
  )
}

export default Home
