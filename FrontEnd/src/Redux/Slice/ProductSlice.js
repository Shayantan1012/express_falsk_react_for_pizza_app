import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState={
     productsData:[],//Array of products//
};

export const addProducts=createAsyncThunk('/products/AddProducts',async(data)=>{
    try{
            console.log("Incoming",data);
        const products=await axiosInstance.post('/products',data);
        if(products)toast.success("Successfully added the products!!!");
        else toast.error("Unable to add products!!!");
        return products;
    }
    catch (error){
        console.log(error);
        toast.error("Somethin went Wrong!!!");
    }
})



export const  getAllProducts= createAsyncThunk('/products/getAll',async()=>{
try{
const products=await axiosInstance.get('/products');
if(products)toast.success("Products Loaded Successfully!!");
else toast.error("Can't load products!!!");
return products;

}catch(error){
    console.log(error);
    toast.error("Somethin went Wrong!!!");

}
})

export const  getProductDetails= createAsyncThunk('/products/getDetails',async(id)=>{
    try{
    const products=await axiosInstance.get(`/products/${id}`);
    if(products)toast.success("Product Loaded Successfully!!");
    else toast.error("Can't load product!!!");
    return products;
    
    }catch(error){
        console.log(error);
        toast.error("Somethin went Wrong!!!");
    
    }
    })
    
const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProducts.fulfilled,(state,action)=>{
        state.productsData=action?.payload?.data?.data.response;
        })
        
        
    }
})

export default productSlice.reducer;
