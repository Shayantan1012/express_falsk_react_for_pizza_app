
import { useState } from "react";
import AddProductPresentation from "./AddProductPresentation";
import { useDispatch } from "react-redux";
import { addProducts } from "../../Redux/Slice/ProductSlice";
import toast from "react-hot-toast";
import BarLoader from "react-spinners/BarLoader";

function AddProduct(){
const [Image,SetImage]=useState(null);
const [loading, setLoading] = useState(false);

const [productInput,setProductInput]=useState({
    productName:'',
    description:'',
    price:'',
    quantity:'',
    catagory:'veg',
    inStock:true,
})

function handleImageChange(e) {
  const file = e.target.files[0]; // Get the first selected file
  if (file) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']; // Valid file types
    if (!allowedTypes.includes(file.type)) {
      toast.error("Invalid file type. Please upload .jpg, .png, or .jpeg.");
      return;
    }
    SetImage(file); // Set image in state
  } else {
    toast.error("No file selected!");
  }
}

const dispatch=useDispatch();

function handelProductInput(e){
  const  {name,value}=e.target;
  if(name=='inStock'){
    if(value=='True'){
        setProductInput({inStock:true})
    }
    else{
        setProductInput({inStock:false})
    }
  }
  else{
  setProductInput(
    {...productInput,
       [name]:value,
    }
  )
}
}
async function submitProductForm(e){
      e.preventDefault();

        if(!productInput.productName  ||!productInput.description||!productInput.price||!productInput.quantity||!productInput.catagory || !Image){
            toast.error("Please fill the all boxes!!!!");
            return ;
            }    
 console.log("This is Image->",Image);
        const formData = new FormData();
    for (const key in productInput) {
      formData.append(key, productInput[key]);
    }
    formData.append('imageURL', Image);
setLoading(true)
    try{
    const apiRespone= await dispatch(addProducts(formData));
    console.log("This is api response->",apiRespone);
    return apiRespone;
        }catch(error){
            console.log(error)
        }finally{
          setLoading(false)

        }
      }    
    

      return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <BarLoader color={'#123abc'} loading={loading} width={150} />
                </div>
            ) : (
                <AddProductPresentation
                    handelProductInput={handelProductInput}
                    submitProductForm={submitProductForm}
                    handleImageChange={handleImageChange}
                />
            )}
        </div>
    )}

export default AddProduct