import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState={
    orderData:null,
}

export const placeOrder=createAsyncThunk('/order/placeOrder',async(data)=>{
    try{
        
        const products=await axiosInstance.post('/orders',data);
        if(products)toast.success("Successfully create Order!!!");
        else toast.error("Cannot create Order!!!");
        return products;
    }
    catch (error){
        console.log(error);
        toast.error("Somethin went Wrong!!!");
    }
})


const OrderSlice=createSlice({
    name:'order',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
    builder
    .addCase(placeOrder.fulfilled,(state,action)=>{

    })
    }
})

export default OrderSlice.reducer;