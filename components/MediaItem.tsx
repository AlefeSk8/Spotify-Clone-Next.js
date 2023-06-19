'use client'

import { useLoadImage } from "@/hooks/useLoadImage"
import { Song } from "@/types"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import AutoScrollText from "./AutoScrollText"

interface MediaItemProps {
  data: Song,
  onClick: (id: string) => void,
  className?: string,
}

export function MediaItem({ data, onClick, className }: MediaItemProps) {
  const imageUrl = useLoadImage(data)
  
  function handleClick() {
    if (onClick) {
      return onClick(data.id)
    }
  }

  return (
    <div
      onClick={handleClick}
      className={twMerge(`
        group
        flex
        items-center
        gap-x-3
        cursor-pointer
        hover:bg-neutral-800/50
        w-full
        p-2
        rounded-md
        max-exsm:min-w-[calc(100vw-80px)]
        max-exsm:max-w-[calc(100vw-80px)]
      `,
        className
      )}
    >
      <div
        className="
          relative
          rounded-md
          min-h-[48px]
          min-w-[48px]
          overflow-hidden
        "
      >
        <Image
          fill
          src={imageUrl || '/images/liked.png'}
          alt="Media Item"
          className="object-cover"
        />
      </div>

      <div
        className="
          flex
          flex-col
          gap-y-1
          overflow-hidden
        "
      >
        <AutoScrollText
          text={data.title}
          className="text-white truncate"
          // TODO: Animate when click in card too
        />

        <AutoScrollText
          text={data.author}
      className="text-neutral-400 text-sm truncate"
          // TODO: Animate when click in card too
        />
      </div>
    </div>
  )
}