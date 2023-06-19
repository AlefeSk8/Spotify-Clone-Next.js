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

    // TODO: Default turn on player
  }

  return (
    <div
      onClick={handleClick}
      className={twMerge(`
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

      <AutoScrollText
        title={data.title}
        text={data.author}
        className="flex flex-col gap-y-1 overflow-hidden"
        titleTwCss="text-white truncate"
        textTwCss="text-neutral-400 text-sm truncate"
      />

      {/* <div
        className="
          flex
          flex-col
          gap-y-1
          overflow-hidden
        "
      >
        <p className="text-white truncate">
          {data.title}
        </p>
        <p className="text-neutral-400 text-sm truncate">
          {data.author}
        </p>
      </div> */}
    </div>
  )
}