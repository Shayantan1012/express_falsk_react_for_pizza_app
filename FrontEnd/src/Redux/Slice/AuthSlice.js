import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from 'react-hot-toast'
const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn')==='true' ||'false',
    role:localStorage.getItem('role') || {},
    data:JSON.parse(localStorage.getItem('data')) || {},
};

export const createAccount = createAsyncThunk('/auth/createAccount', async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/users', data);
        toast.success(response.data.message);
        return response;
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.error || "Unable to create User!!!");
        // Pass error data to rejected action
        return rejectWithValue(error.response?.data);
    }
});



export const login=createAsyncThunk('/auth/login',async(data)=>{
    console.log("Incoming data to thunk",data);
    try{
    
    const response=await axiosInstance.post('/auth/login',data);
    console.log("This is response->",response);
    
    if(response)toast.success(response.data.message);
    if(!response)toast.error("Unable to create User!!!")
        
    const apiResponse=await response;
    return apiResponse;
    
    }catch(error){
    console.log(error);
    }
    
    })
    

    export const logout=createAsyncThunk('/auth/logout',async(data)=>{
        console.log("Incoming data to thunk",data);
        try{
        
        const response=await axiosInstance.post('/auth/logout',data);
        console.log("This is response->",response);
        if(response)toast.success(response.data.message);
        if(!response)toast.error("Unable to Log Out!!!")
            
        const apiResponse=await response;
        return apiResponse;
        
        }catch(error){
        console.log(error);
        }
        
        })
        

const AuthSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(login.fulfilled,(state,action)=>{
        state.isLoggedIn=true;
        state.role=action?.payload?.data?.data?.userRole;
        state.data=action ?.payload ?.data?.data?.userData;
        localStorage.setItem('isLoggedIn',true);
        localStorage.setItem('role',action?.payload?.data?.data?.userRole);
        localStorage.setItem('data',JSON.stringify(action ?.payload ?.data?.data?.userData));
        })
        .addCase(logout.fulfilled,(state)=>{
            localStorage.setItem('isLoggedIn',false);
            localStorage.setItem('role','');
            localStorage.setItem('data',JSON.stringify({}));
            state.isLoggedIn=false;
            state.role='';
            state.data={};
            })
    }
});
export default AuthSlice.reducer;