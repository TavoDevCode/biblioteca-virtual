import { RecreationalFiles } from '@/interfaces'
import fs from 'fs'
import path from 'path'

export const root = path.join(process.cwd(), 'public')

export const getRecreationalFiles = (): RecreationalFiles[] => {
  const pathRecreational = path.join(root, 'documents')
  const recreationalFiles = fs.readdirSync(pathRecreational)

  const recreationalFilesDirectory = recreationalFiles.map(fileName => {
    const recreationalFiles = fs.readdirSync(path.join(pathRecreational, fileName))

    const songRegex = /\.mp3|.mp4/g
    const imageRegex = /\.jpg|.png/g

    return {
      imgSong: recreationalFiles.find(fileName => imageRegex.test(fileName)) ?? '',
      songSrc: recreationalFiles.find(fileName => songRegex.test(fileName)) ?? '',
      title: fileName
    }
  })

  return recreationalFilesDirectory
}
