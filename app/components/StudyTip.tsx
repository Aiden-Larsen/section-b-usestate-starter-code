'use client'
// use use client to make your component a client component 
import React, { useState } from 'react'

const StudyTip = () => {
    const [isVisible, setIsVisible ] = useState(false)

const handleToggle = () => setIsVisible(true)
  return (
    <div className='bg-slate-800 rounded-2xl p-6 border border-slat-700'>
        <h2 className='text-white font-bold text-xl mb-1'>Study Tip of the day</h2>
      
    </div>
  )
}

export default StudyTip
