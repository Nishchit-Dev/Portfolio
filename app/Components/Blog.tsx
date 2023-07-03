'use client'

import { useEffect, useState } from "react"
import { useFetchBlog } from "../Hooks/useFetchBlog"

export default async function Blogs(){
    const [data,setData] = useState<any[]>([])

    useEffect(()=>{
        const post:any = useFetchBlog()
        setData(post)
        console.log(post)
    },[])
   
    return (
        <>
        {/* {data.map((ele:any,index:number)=>{
            console.log(index)
        })} */}
        
        </>
    )
}