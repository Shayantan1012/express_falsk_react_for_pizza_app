import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import flaskaxiosInstance from "../../Helpers/flaskaxiosInstance";


export const voiceAssitenceResponse = createAsyncThunk(
    "voiceAssitence/response",
    async (data) => {
        try {

            const response = await flaskaxiosInstance.post("/voiceAssistance", data);
            if (response.status === 200) {
                console.log("Response from Flask:", response.data);
                return response.data; // Return the data from the response
            } else {
                console.error("Error in response:", response.statusText);
                throw new Error("Failed to fetch response from Flask");
            }

            return response

        }
        catch (error) {
            console.error("Error in voiceAssitenceResponse:", error);
            throw error;
        }


    }
)