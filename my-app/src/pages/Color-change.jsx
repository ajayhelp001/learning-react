import React, { useState } from 'react'

const Color = () => {
  const [color, setColor] = useState('bg-slate-200')
  const red = () => {
    setColor('bg-red-500')
  }
  const blue = () => {
    setColor('bg-blue-500')
  }
  const green = () => {
    setColor('bg-green-500')
  }
  const black = () => {
    setColor('bg-black')
  }
  return (
    <>
    <style>
        {`
          .color-body {
            height: calc(100vh - 68px);
          }
        `}
      </style>
    <div className={`color-body duration-500 ${color}`}></div>
    <div className="container py-4 px-10 bg-white mx-auto">
        <div class="grid grid-cols-4 gap-4">
            <div><button onClick={red} className='px-4 py-2 font-semibold text-sm bg-red-500 text-white rounded-full shadow-sm'>Red</button></div>
            <div><button onClick={blue} className='px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-full shadow-sm'>Blue</button></div>
            <div><button onClick={green} className='px-4 py-2 font-semibold text-sm bg-green-500 text-white rounded-full shadow-sm'>Green</button></div>
            <div><button onClick={black} className='px-4 py-2 font-semibold text-sm bg-black text-white rounded-full shadow-sm'>Black</button></div>
        </div>
    </div>
    </>
  )
}

export default Color