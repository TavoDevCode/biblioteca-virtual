import Image from 'next/image'

import React, { FC, useEffect, useRef, useState } from 'react'

interface MusicCardProps {
  title: string
  subtitle: string
  songSrc: string
  imgSong: string
}

export const MusicCard: FC<MusicCardProps> = ({ imgSong, songSrc, subtitle, title }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)

  useEffect(() => {
    if (audioRef.current) {
      const { current } = audioRef

      const updateTime = () => setCurrentTime(current?.currentTime ?? 0)
      const updateDuration = () => setDuration(current?.duration ?? 0)

      setDuration(current?.duration ?? 0)

      audioRef.current.addEventListener('timeupdate', updateTime)
      audioRef.current.addEventListener('durationchange', updateDuration)
    }
  }, [])

  const handleStartAudio = (): void => {
    audioRef.current?.play()

    setIsPlaying(true)
  }

  const handlePlayAudio = (): void => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleBackwardAudio = (): void => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 30
    }
  }

  const handleForwardAudio = (): void => {
    if (audioRef.current) {
      audioRef.current.currentTime += 30
    }
  }

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${minutes}:${formattedSeconds}`
  }

  const calculateProgress = (): string => {
    if (duration > 0) {
      const progress = (currentTime / duration) * 100
      return `${progress}%`
    }
    return '0%'
  }

  return (
    <div className="w-64 h-auto bg-white shadow-lg rounded-xl flex flex-col justify-center items-center">
      <Image
        className="rounded-md mt-2"
        src={imgSong}
        width={240}
        height={240}
        alt={title}
        // placeholder="blur"
        // blurDataURL={imgSong}
      />
      <div className="w-full h-auto px-3 py-2">
        <p className="text-sm font-bold mb-1">{title ?? 'Title'}</p>
        <p className="text-xs font-normal text-gray-500">{subtitle ?? 'Subtitle'}</p>
      </div>
      <div className="w-full h-auto px-3 mb-2">
        <div className="w-full bg-purple-200 rounded-xl">
          <div className="bg-purple-500 h-1 rounded-xl" style={{ width: calculateProgress() }} />
        </div>
        <div className="w-full flex justify-between mt-1">
          <p className="text-xs font-medium">{formatTime(currentTime)}</p>
          <p className="text-xs font-medium">{formatTime(duration)}</p>
        </div>
        <div className="w-full flex justify-between my-2">
          <div className="flex-auto flex items-center justify-evenly">
            <button type="button" aria-label="Rewind 10 seconds" onClick={handleBackwardAudio}>
              <svg width="24" height="24" fill="none">
                <path
                  d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 5v3.111c0 .491.398.889.889.889H9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {currentTime >= duration ? (
            <button type="button" aria-label="Play" onClick={currentTime >= duration ? handleStartAudio : handlePlayAudio}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : isPlaying ? (
            <button type="button" aria-label="Pause" onClick={currentTime >= duration ? handleStartAudio : handlePlayAudio}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button type="button" aria-label="Play" onClick={handlePlayAudio}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}

          <div className="flex-auto flex items-center justify-evenly">
            <button type="button" aria-label="Skip 10 seconds" onClick={handleForwardAudio}>
              <svg width="24" height="24" fill="none">
                <path
                  d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 5v3.111c0 .491-.398.889-.889.889H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={songSrc} />
    </div>
  )
}
