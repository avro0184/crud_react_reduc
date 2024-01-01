import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const CreateUser = createAsyncThunk("createuser",async(data)=>{
    const request = await axios.post("https://658feaf4cbf74b575eca40b8.mockapi.io/crud",data)
    const response = await request.data
    return response
})

export const ShowUser = createAsyncThunk("showuser", async()=>{
    const request = await axios.get("https://658feaf4cbf74b575eca40b8.mockapi.io/crud")
    const response = await request.data
    return response
})
export const DeleteUser = createAsyncThunk("deleteuser", async(id)=>{
    const request = await axios.delete(`https://658feaf4cbf74b575eca40b8.mockapi.io/crud/${id}`)
    const response = await request.data
    console.log(response)
    return response
})
export const UpdateUser = createAsyncThunk("deleteuser", async(id)=>{
    const request = await axios.put(`https://658feaf4cbf74b575eca40b8.mockapi.io/crud/${id}`)
    const response = await request.data
    console.log(response)
    return response
})


const UserSlice = createSlice({
    name : "UserDetail",
    initialState:{
        loading: false,
        users : [],
        error: null
    },  extraReducers:(builder)=>{
        builder.addCase(CreateUser.pending,(state)=>{
            state.loading=true
            state.users=null
            state.error=null
        }) .addCase(CreateUser.fulfilled,(state , action)=>{
            state.loading=false
            state.users.push(action.payload)
            state.error=null
        }) .addCase(CreateUser.rejected,(state , action)=>{
            state.loading=false
            state.users=null
            console.log(action.error.message)
            state.error=null
        }).addCase(ShowUser.pending,(state)=>{
            state.loading=true
            state.users=null
            state.error=null
        }) .addCase(ShowUser.fulfilled,(state , action)=>{
            state.loading=false
            state.users=action.payload
            state.error=null
        }) .addCase(ShowUser.rejected,(state , action)=>{
            state.loading=false
            state.users=null
            console.log(action.error.message)
            state.error=null
        }).addCase(DeleteUser.pending,(state)=>{
            state.loading=true
            state.users=null
            state.error=null
        })  .addCase(DeleteUser.fulfilled, (state, action) => {
            state.loading = false;
            const deletedId = action.meta.arg; 
        
            if (deletedId) {
                state.users = state.users.filter((elm) => elm.id !== deletedId);
            }
        
            state.error = null;
        }) .addCase(DeleteUser.rejected,(state , action)=>{
            state.loading=false
            state.users=null
            console.log(action.error.message)
            state.error=null
        })
    }

})

export default UserSlice.reducer