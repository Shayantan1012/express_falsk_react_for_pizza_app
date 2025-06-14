import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/header";


function AllProductDetails(){

    const{productsData}=useSelector((state)=>(state.product));


return (
    <div>
   <Header/>
   <div className="mx-auto">
                <div className="flex flex-wrap montserrat-font1 justify-center">
                    {productsData.map((item) => {
                        return (
                            item.inStock && (
                                <div className="p-4 w-[90%] h-[20%] md:w-1/3" key={item._id}>
                                    <Link to={`/product/${item._id}`}>
                                    <div className="overflow-hidden border shadow-xl hover:shadow-2xl rounded-lg border-opacity-60 transform transition-transform duration-500 ease-in-out hover:scale-105">
                                            <img 
                                                src={item.productImage}
                                                alt="Pizza Image"
                                                className="object-cover object-center w-full h-30 lg:h-48 md:h-36"
                                            />
                                            <div className="p-6 border">
                                                <h2 className="text-xs  font-medium tracking-widest text-gray-400 title-font">
                                                    {item.category}
                                                </h2>
                                                <h1 className="mb-3 text-lg arima-font4 font-bold text-gray-900 title-font">
                                                    {item.productName}
                                                </h1>
                                                <p className="mb-4 text-base montserrat-font1 leading-relaxed">
                                                    {item.description}
                                                </p>
                                                <p className="text-lg font-medium text-gray-900 title-font">
                                                    ${item.price}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        )
                    })}
                </div>
            </div>

            

        <Footer/>
        </div>
)


}

export default AllProductDetails