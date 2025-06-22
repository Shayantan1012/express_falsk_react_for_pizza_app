

import { useState } from "react";
import foodSvg from "../../assets/food.svg";
import { useDispatch, useSelector } from "react-redux";
import { predictImage } from "../../Redux/Slice/predictSLice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ColorRing } from 'react-loader-spinner';

function ImagePopUp({ closePopUp }) {
    const products = useSelector((state) => state.product.productsData);
    const dispatch = useDispatch();
    const [FileChange, setFileChange] = useState(null);
    const [tempFile, setTempFile] = useState(null);
    const [imageLabel, setImageLabel] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setTempFile(imageUrl);
            setFileChange(file);
        }
    }

    async function predictImageLabel() {
        const formdata = new FormData();
        formdata.append("image", FileChange);
        setLoading(true);

        const response = await dispatch(predictImage(formdata));

        if (response?.payload?.status === 200) {
            console.log("Image prediction successful:", response.payload.data);
            setImageLabel(response.payload.data["Predicted class"]);
        } else {
            console.error("Image prediction failed:", response.payload.data);
        }
        setLoading(false);
        return response;
    }

    async function findItem() {
        const name = imageLabel;
        const formattedname=name.replace(/_/g, " ").toLowerCase()
        const foundItem = products.find((item) => item.productName.toLowerCase() === formattedname);
        if (foundItem) {
            console.log("Found item:", foundItem);
            navigate(`/product/${foundItem._id}`);
            closePopUp();
        } else {
            toast.error("Item not found in the database");
        }
    }
     const dishMap = new Map([
  ["burger", "Burger"],
  ["butter_naan", "Butter Naan"],
  ["chai", "Chai"],
  ["chapati", "Chapati"],
  ["chole_bhature", "Chole Bhature"],
  ["dal_makhani", "Dal Makhani"],
  ["dhokla", "Dhokla"],
  ["fried_rice", "Fried Rice"],
  ["idli", "Idli"],
  ["jalebi", "Jalebi"],
  ["kaathi_rolls", "Kaathi Rolls"],
  ["kadai_paneer", "Kadai Paneer"],
  ["kulfi", "Kulfi"],
  ["masala_dosa", "Masala Dosa"],
  ["momos", "Momos"],
  ["paani_puri", "Paani Puri"],
  ["pakode", "Pakode"],
  ["pav_bhaji", "Pav Bhaji"],
  ["pizza", "Pizza"],
  ["samosa", "Samosa"]
]);


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-500 bg-opacity-50">
        <div className="montserrat-font1 w-[90vw] h-[90vh] sm:w-[80vw] md:w-[65vw] lg:w-[55vw] 
                    bg-gradient-to-br from-black via-white-600 to-white-400 
                    rounded-2xl p-6 overflow-y-auto relative">                <div className="flex flex-col items-center justify-between h-full w-full">
                    <div className="w-full flex justify-end items-center">
                        <span className="close text-4xl text-white cursor-pointer" onClick={closePopUp}>&times;</span>
                    </div>
                    <span className="text-2xl sm:text-3xl font-bold text-white mb-2">Upload and Get</span>
                        <img
                        src={!tempFile ? foodSvg : tempFile}
                        className={
                            !tempFile
                            ? "w-[60vw] h-[30vh] sm:w-[40vw] sm:h-[30vh] object-contain rounded-2xl border-2 border-white"
                            : "w-[80vw] h-[40vh] sm:w-[60vw] sm:h-[50vh] rounded-2xl object-contain border-2 border-white"
                        }
                        alt="Preview"
                        />


                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                        {!tempFile ? "Upload an Image and Get" : ""}
                    </h2>

                    <div className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center pb-4">
                        <label
                            htmlFor="file-upload"
                            className="cursor-pointer px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                        >
                            {!tempFile ? "Upload Image" : "Change Image"}
                        </label>

                        {loading ? (
                            <ColorRing
                                visible={true}
                                height="45"
                                width="45"
                                ariaLabel="color-ring-loading"
                                wrapperClass="color-ring-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />
                        ) : (
                            tempFile && (
                                <button
                                    onClick={predictImageLabel}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                                >
                                    Send
                                </button>
                            )
                        )}
                    </div>

                    {imageLabel && (
                        <div className="text-white text-lg text-center mt-2 px-2">
                            Do you want to have a <strong>{dishMap.get(imageLabel)}</strong>?{" "}
                            <button
                                onClick={findItem}
                                className="group inline-flex items-center gap-2 px-4 py-2 mt-2 bg-blue-600 text-white rounded-2xl text-sm font-semibold transition-all duration-300 hover:bg-blue-700"
                            >
                                Buy It
                                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </button>
                        </div>
                    )}

                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default ImagePopUp;
