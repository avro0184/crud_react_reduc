import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteUser, ShowUser } from '../Store/UserSlice'

const ViewUsers = () => {
    const alldata = useSelector((state) => state.user.users)
    const dispatch = useDispatch()
    function single(id){
        const filteredData = alldata ? alldata.filter((d)=>d.id===id): []
        console.log(filteredData[0].name)
    }
    useEffect(()=>{
     dispatch(ShowUser())
    },[])
  return (
    <>
      <div>
        {
            <ul>
                {
                   alldata && alldata.map((data)=>(
                    <li key={data.id}>{data.id}--{data.name}---{data.email} ------<button className=' bg-slate-400 p-2 m-2' onClick={()=>single(data.id)}>{data.id}</button> ---------<button onClick={()=>dispatch(DeleteUser(data.id))} className='p-2 m-2 bg-red-700'>delete</button></li>
                   ))
                }
            </ul>
        }
      </div>
    </>
  )
}

export default ViewUsers
