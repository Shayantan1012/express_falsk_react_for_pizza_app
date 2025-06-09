import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logout } from "./AuthSlice";

const initialState={
     cartData:{},//Array of products//
};

export const addProductsToCart=createAsyncThunk('/cart/addProducts',async(productId)=>{
    try{

        const products=await axiosInstance.post(`/carts/add/${productId}`);
        if(products)toast.success("Successfully added the products in Cart!!!");
        else toast.error("Unable to add products!!!");
        return products;
    }
    catch (error){
        console.log(error);
        toast.error("Somethin went Wrong!!!");
    }
})

export const removeProductsFromCart=createAsyncThunk('/cart/removeProducts',async(productId)=>{
    try{

        console.log("This is thunk data->",productId);
        const products=await axiosInstance.post(`/carts/remove/${productId}`);
        console.log("This is The submitted products in cart->",products);
        if(products)toast.success("Successfully removed the product from Cart!!!");
        else toast.error("Unable to remove products!!!");
        return products;
    }
    catch (error){
        console.log(error);
        toast.error("Somethin went Wrong!!!");
    }
})

export const getCartDetails=createAsyncThunk('/cart/getDetails',async()=>{
    try{

        const products=await axiosInstance.get('/carts');
       // console.log("This is The submitted products in cart->",products);
        if(products)toast.success("Successfully get all the products from Cart!!!");
        else toast.error("Unable to get products!!!");
        return products;
    }
    catch (error){
        if(error?.response?.status===401){
    toast.error("Please Login to View Cart!!")
        return {
        isUnauthorised:true,
        }   
     }
        toast.error("Somethin went Wrong!!!");
    }
})

    
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCartDetails.fulfilled,(state,action)=>{
        state.cartData=action?.payload?.data?.data;
        })    
        }
})

export default cartSlice.reducer;
