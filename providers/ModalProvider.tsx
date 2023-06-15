'use client'

import { AuthModal } from "@/components/AuthModal"
import { useEffect, useState } from "react"

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  if (!isMounted) {
    return null
  }
  
  return (
    <div>
      <AuthModal />
    </div>
  )
}