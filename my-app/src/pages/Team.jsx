import React, { useEffect, useState } from 'react';
import Card from '../component/Card'
import Api from '../api/Api.json'

const Team = () => {
    // let userInfo = Api
    const [userInfo, setuserInfo] = useState([])

    useEffect(() =>{
        fetch("https://ajayhelp001.github.io/product-api/Api.json")
        .then(response => response.json())
        .then(data => setuserInfo(data))
        // .catch(error => )
    })
  return (
    <>
        <div className="mx-auto max-w-3xl md:text-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
        People who made it successful
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 md:text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis
        a vel error explicabo voluptatum nihil possimus veritatis eos culpa.
        </p>
    </div>
    
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {userInfo.map((content, index) =>(
            <Card key={index} productImg={content.productImg} username={content.username} post={content.post} description={content.description}/>
        ))}
    </div>
    </div>
    </>
  )
}

export default Team