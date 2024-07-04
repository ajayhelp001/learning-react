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
        <h1>Counter Value {counts}</h1>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeVale}>Remove Value</button>
        </>
    )
}

export default Counter