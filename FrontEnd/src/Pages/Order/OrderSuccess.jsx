import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/header";
import OrderSuccessImage from "../../assets/orderSuccess.svg"
function OrderSuccess(){
const navigate=useNavigate();


    return (
        <div>
            <Header/>
            <div className="flex flex-col justify-center items-center py-28">

<img 
    width={400}
    height={400}
    src={OrderSuccessImage}
/>

<p className="text-lg font-semibold">
    Your order has been placed successfully
</p>

<button
    onClick={() => navigate('/')}
    className="bg-yellow-500 text-white px-4 py-2 rounded mt-4"
>
    Go Back Home
</button>

</div>            <Footer/>
        </div>
    )
}

export default OrderSuccess;