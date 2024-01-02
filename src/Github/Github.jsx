import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    let data = useLoaderData()
    // useEffect(() => {
    //   fetch("https://api.github.com/users/hiteshchoudhary")
    //   .then((res)=>res.json())
    //   .then((res)=>setData(res))
    //   .catch((err)=>console.log(err));
    // }, [])
    

  return (
    <div className=''>Github_followers:{data.followers}
        <img src={data.avatar_url} alt=""  width={"100px"}/>
    </div>
  )
}

export default Github;

export const githubLoader = async ()=>{
    const res = await fetch("https://api.github.com/users/hiteshchoudhary");
    return res.json()

}