'use client'

import { SongItem } from "@/components/SongItem"
import { useOnPlay } from "@/hooks/useOnPlay"
import { Song } from "@/types"

interface PageContentProps {
  songs: Song[]
}

export function PageContent({ songs }: PageContentProps) {
  const onPlay = useOnPlay(songs)

  if (songs.length === 0) {
    return (
      <div
        className="mt-4 text-neutral-400 "
      >
        No songs available.
      </div>
    )
  }

  return (
    <div
      className="grid grid-cols-2 @media-mobile:grid-cols-3 md:grid-cols-auto-fill gap-4 mt-4"
    >
      {songs.map((song) => (
        <SongItem
          key={song.id}
          onClick={(id: string) => onPlay(id)}
          data={song}
        />
      ))}
    </div>
  )
}