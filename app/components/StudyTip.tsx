'use client'
// use use client to make your component a client component 
import React, { useState } from 'react'

const StudyTip = () => {
    const [isVisible, setIsVisible ] = useState(false)

const handleToggle = () => setIsVisible(true)
  return (
    <div className='bg-slate-800 rounded-2xl p-6 border border-slat-700'>
        <h2 className='text-white font-bold text-xl mb-1'>Study Tip of the day</h2>
        <p className='text-slate-400 text-sm mb-1'>
          State
          <code className='text-cyan-400'> isVisible = {String(isVisible)}</code>
        </p>
        {/* button to toggle state */}
        <button onClick={handleToggle} className='bg-cyan-400 text-slate-900 font-semibold px-6 py-3 rounded-xl hover:bg-cyan-300'>
          {isVisible ? "Hide Tip" : "Show Tip"}
        </button>

        {
          isVisible && (
            <p className='m-4 text-slate-300 bg-slate-700 rounded-xl p-4 leading-relaxed'>
              Break your study sessions into 25min blocks with 5min break. This is called the <strong className='text-white'>Pomodoro Method</strong> it helps you stay focused.
            </p>
          )
        }
    </div>
  )
}

export default StudyTip
