import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/header";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { placeOrder } from "../../Redux/Slice/orderSlice";

function Order(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {cartData}=useSelector((state)=>(state.cart));
    const [details,useDetails]=useState({
        paymentMethod:'OFFLINE',
        address:'',
    });
    function  handleUserInput(e){
        const {name,value}=e.target;
        
        useDetails({
            ...details,
            [name]:value,
        })
    }     
  async  function  handleFormSubmit(e){
    e.preventDefault();

if(!details.paymentMethod==='' || !details.address==='' ){
    toast.error("Give the Necessary Informations!!!");
    return ;
}
     const response=await dispatch(placeOrder(details));
    console.log("This is Order response->",response);
    if(response?.payload?.data?.success){
 toast.success("Order placed Successfully!!!");
 navigate('/order/success')
    }
    else{
        toast.success("Canot place Order!!!");
    }
     return response;
    }

    return (
        <div>
<Header/>
<section className="text-gray-600 montserrat-font1 body-font min-h-56">

<div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Thanks for Choosing Us {' '}</h1>

        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Total Price - 
            <span className="font-bold text-red-900">
                ₹ {cartData?.items?.length === 0
          ? ''
          : cartData?.items?.reduce((acc, item) => acc + item?.quantity*item?.product?.price , 0) }
            </span>
        </p> 
    </div>

    <form onSubmit={handleFormSubmit}>
        <div className="relative flex-grow w-full">
            <label htmlFor="paymentMethod" className="text-2xl leading-7 text-gray-600">
                Payment Method
            </label>
            <select 
                name="paymentMethod"
                required
                onChange={handleUserInput}
                className="p-2 border rounded-md focus:outline-none focus:border-primary-500 bg-white text-gray-700 w-full"
            >
                <option value="OFFLINE">Offline</option>
                <option value="ONLINE">Online</option>
            </select>
        </div>

        <div className="relative flex-grow w-full my-5">
            <label htmlFor="address" className="leading-7 text-2xl text-gray-600">
                Address
            </label>
            <textarea 
                name="address"
                placeholder="Enter your address here..."
                onChange={handleUserInput}
                className="w-full p-2 border rounded-md focus:outline-none focus:border-primary-500 bg-white text-gray-700"
            >
            </textarea>
        </div>

        <button 
            className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg"
        >
            Place Order
        </button>
    </form>
</div>

</section>
<Footer/>
        </div>
    )
}
export default Order;