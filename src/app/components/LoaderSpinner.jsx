'use client'
import React from 'react'
import { useAppContext } from '../Contexts/AppContext'
export default function LoaderSpinner() {
  let {isLoading}=useAppContext()
  return (
    isLoading &&(
        <div className="loader-overlay">
          <div className="loader-spinner"></div>
        </div>
    )
  )
}
