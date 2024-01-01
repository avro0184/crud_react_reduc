import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CreateUser } from '../Store/UserSlice'
import { useNavigate } from 'react-router-dom'

export default function CreateUserView() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

   function submitform(event){
    event.preventDefault()
     const data = {name , email , password}
     console.log(data)
     dispatch(CreateUser(data))
     navigate('/')
   }
   
    return (
        <>
            <section class="flex justify-center items-center h-screen bg-gray-800">
                <form action="" onSubmit={submitform}>
                <div class="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
                    <div class="mb-4">
                        <p class="text-gray-400">Sign In</p>
                    </div>
                    <div>
                        <input value={name} onChange={(e) => setname(e.target.value)} class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Name" />
                    </div>
                    <div>
                        <input value={email} onChange={(e) => setemail(e.target.value)} class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Email" />
                    </div>
                    <div>
                        <input value={password} onChange={(e) => setpassword(e.target.value)} class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Password" />
                    </div>
                    <div>
                        <button type='submit' class="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign In</button>
                    </div>

                </div>
                </form>
            </section>
        </>
    )
}
