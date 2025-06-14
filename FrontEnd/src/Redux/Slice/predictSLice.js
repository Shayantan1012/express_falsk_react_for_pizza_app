import { createAsyncThunk } from "@reduxjs/toolkit";
import flaskaxiosInstance from "../../Helpers/flaskaxiosInstance";

export const predictImage=createAsyncThunk('/cart/addProducts',async(imagedata)=>{
    try{

        const products=await flaskaxiosInstance.post('/model/predict',imagedata);
        // if(products)toast.success("Successfully added the products in Cart!!!");
        // else toast.error("Unable to add products!!!");
        return products;
    }
    catch (error){
        console.log(error);
        toast.error("Somethin went Wrong!!!");
    }
})