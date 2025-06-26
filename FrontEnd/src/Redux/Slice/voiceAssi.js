import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import flaskaxiosInstance from "../../Helpers/flaskaxiosInstance";


export const voiceAssitenceResponse = createAsyncThunk(
    "voiceAssitence/response",
    async (data) => {
        try {
            const formData = new FormData();
            formData.append("text", data);

            const response = await flaskaxiosInstance.post("/voiceAssistance", formData);
            console.log("------------>",response);
            if (response.status === 200) {
                return response; // Return the data from the response
            } else {
                console.error("Error in response:", response.statusText);
                throw new Error("Failed to fetch response from Flask");
            }
            // return response.data;


        }
        catch (error) {
            console.error("Error in voiceAssitenceResponse:", error);
            throw error;
        }


    }
)