'use client'

import { Toaster } from 'react-hot-toast'

export function ToasterProvider() {
  return (
    <Toaster 
      toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
        }
      }}
    />
  )
}