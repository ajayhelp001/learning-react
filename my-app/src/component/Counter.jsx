import React, { useState } from 'react'


const Counter = () => {
    const [counts, setCount]  = useState(5)
    const addValue = () => {
        // setCount(prevCount => prevCount + 1);
        setCount(counts + 1)
    }
    const removeVale = () => {
        // setCount(prevCount => prevCount - 1);
        setCount(counts - 1)
    }

    return (
        <>
        <h1 className='text-lg font-bold text-blue-950'>Counter Value {counts}</h1>
        <button className='rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700' onClick={addValue}>Add Value</button>
        <button className='rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-800' onClick={removeVale}>Remove Value</button>
        </>
    )
}

export default Counter