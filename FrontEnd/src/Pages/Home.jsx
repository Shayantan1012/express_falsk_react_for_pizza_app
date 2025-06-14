import pizza2 from '../assets/pizza2.png'
import cook from'../assets/cooking1.png'
import icon1 from'../assets/icon1.svg'
import icon2 from'../assets/icon2.svg'
import icon3 from'../assets/icon3.svg'
import icon4 from'../assets/icon4.svg'
import Footer from '../Components/Footer';
import Header from '../Components/header';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../Redux/Slice/ProductSlice'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ImagePopUp from './AI_page/Image_pop_up'
import OverlappingFoodImages from '../Components/overLappedImages'
import Slider from '../Components/slider'
import img1 from "../assets/berger.webp";
import img2 from "../assets/dhokla.webp";
import img3 from "../assets/dal_makhni.webp";
import img4 from "../assets/kulfi.webp";
import img5 from "../assets/jelabi.webp";
import img6 from "../assets/masala dosa.webp";
// import img7 from "../assets/Masala_Chai.webp";


function Home(){
const dispatch=useDispatch();
const navigate=useNavigate();
useEffect(()=>{
    dispatch(getAllProducts());
},[])

const images=[
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    
]


function handleClick() {
  navigate('/product/allProduct'); // change '/menu' if your route is different
}


const{productsData}=useSelector((state)=>(state.product));
return(
    <div className=''>
            <Header/>

   <section className="z-10  flex flex-col-reverse items-center justify-items-center py-4 justify-center md:flex-row bg-gradient-to-r from-white via-gray-100 to-white">
    < div className=" w-4/6 ml-4 flex flex-col justify-between  text-5xl text-center md:w-2/6 md:text-left">
    <div className="flex justify-center md:justify-start">
            <div className="flex flex-row justify-between ">
                 
                <h1 className="pb-2 afacad-flux-font3 text-transparent bg-gradient-to-r from-yellow-500 to-amber-700 bg-clip-text font-bold">
                Savor the Taste of India
                </h1>
                    <div>
                        😃
                    </div>
            </div>
    </div> 
            
        <div className="text-sm arima-font2 font-bold mt-3 mb-3 italic text-slate-600">
        Discover authentic Indian flavors delivered to your doorstep. From spicy street food to rich traditional dishes, satisfy every craving with just a few taps.
        </div>

            <div className="flex justify-center md:justify-start">
                <div className="flex  shadow-lg justify-items-center items-center  basis-[40%] px-4 py-2 rounded-md justify-between bg-yellow-400 hover:bg-yellow-200">
                    
                    <button className=" text-xl arima-font2  font-semibold" onClick={()=>navigate('/product/allProduct')}>
                        Order Now
                    </button>
                    <span className="transition-transform ease-in-out hover:translate-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </span>

                </div>
            </div>
    
    </div>

    <OverlappingFoodImages/>

</section>

<section className='flex flex-col md:flex-col  justify-center md:justify-between mb-2 py-5 md:flex-row bg-gradient-to-r from-white via-gray-100 to-white space-x-* mt-2'>
<div className='afacad-flux-font3 font-extrabold  flex flex-col md:flex-row  justify-center md:justify-start'>

   
    <Slider images={images}/>


    <div className='flex flex-col items-center justify-center md:justify-start'>
        <div className='text-5xl afacad-flux-font5 font-extrabold bg-gradient-to-l mt-6 ml-4 from-yellow-500 to-orange-600 text-transparent bg-clip-text'>
            Crafted by India’s Finest <br /> Culinary Experts
        </div>
        <p className='text-base mt-3 leading-relaxed font-semibold text-orange-700 ml-4'>
            Why Swad Desi is the ultimate destination for Indian food lovers:
        </p>

        <div className="space-y-6 mt-6 ml-6">
            {[
            "Authentic regional flavors from across India",
            "Freshly prepared with premium, hygienic ingredients",
            "Delivered hot & fast, right to your doorstep",
            ].map((text, idx) => (
            <div key={idx} className='flex items-center'>
                <div className='text-amber-500 w-10 h-10 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                </svg>
                </div>
                <div className='text-xl afacad-flux-font5 font-bold ml-4 bg-gradient-to-l from-yellow-600 to-orange-500 text-transparent bg-clip-text'>
                {text}
                </div>
            </div>
            ))}
        </div>
    </div>    


        
</div>
    <div className='flex flex-row flex-wrap justify-center md:justify-between montserrat-font1 mt-10  px-4'>
        {[
        {
            icon: icon1,
            title: 'Order Desi Dishes',
            desc: 'Browse through our wide range of Indian delicacies and place your order effortlessly.',
        },
        {
            icon: icon2,
            title: 'Track & Pickup',
            desc: 'Track your order in real time or opt for easy pickup at your nearest location.',
        },
        {
            icon: icon3,
            title: 'Enjoy at Home',
            desc: 'Experience the joy of authentic Indian food with friends and family in comfort.',
        },
       {
            icon: icon4, // Replace or define this image
            title: 'Freshly Cooked',
            desc: 'All our dishes are freshly prepared by experienced chefs using the finest ingredients.',
         },
        ].map((card, idx) => (
        <div
            key={idx}
            className='flex flex-col w-64 bg-white p-5 rounded-2xl shadow-xl hover:shadow-md transition-all duration-300 items-center text-center mx-4 my-4'
        >
            <div className='rounded-full bg-slate-100 h-20 w-20 mb-4 flex items-center justify-center'>
            <img src={card.icon} alt={`icon-${idx}`} className='w-10 h-10' />
            </div>
            <div className='font-bold text-xl mb-2'>{card.title}</div>
            <p className='text-sm italic text-slate-600 leading-relaxed'>{card.desc}</p>
        </div>
        ))}

    </div> 


    </section>


{/* 
    <div className="mx-auto">
                <div className="flex flex-wrap  justify-center">
                    {productsData.map((item) => {
                        return (
                            item.inStock && (
                                <div className="p-4 md:w-1/3" key={item._id}>
                                    <Link to={`/product/${item._id}`}>
                                    <div className="overflow-hidden border shadow-xl hover:shadow-2xl rounded-lg border-opacity-60 transform transition-transform duration-500 ease-in-out hover:scale-105">
                                            <img 
                                                src={item.productImage}
                                                alt="Pizza Image"
                                                className="object-cover object-center w-full lg:h-48 md:h-36"
                                            />
                                            <div className="p-6 border">
                                                <h2 className="text-xs  font-medium tracking-widest text-gray-400 title-font">
                                                    {item.category}
                                                </h2>
                                                <h1 className="mb-3 text-lg arima-font4 font-bold text-gray-900 title-font">
                                                    {item.productName}
                                                </h1>
                                                <p className="mb-4 text-base afacad-flux-font3 leading-relaxed">
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
            </div> */}

<div className='w-full flex flex-row justify-center items-center bg-gradient-to-r from-white via-gray-100 to-white'>
        <button
        onClick={handleClick}
        className="flex flex-row arima-font2 px-6 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-xl font-bold text-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
        >
        Explore Menu
                    <span className="transition-transform ease-in-out hover:translate-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </span>        
        </button>


</div>

            

    <Footer/>
     
    </div>
)
}
export default Home;