import pizza2 from '../assets/pizza2.png'
import cook from'../assets/cooking1.png'
import icon1 from'../assets/orderFood.png'
import icon2 from'../assets/pickup.png'
import icon3 from'../assets/enjoy.png'
import Footer from '../Components/Footer';
import Header from '../Components/header';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../Redux/Slice/ProductSlice'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ImagePopUp from './AI_page/Image_pop_up'

function Home(){
const dispatch=useDispatch();
const navigate=useNavigate();
useEffect(()=>{
    dispatch(getAllProducts());
},[])

const{productsData}=useSelector((state)=>(state.product));
return(
    <div className=''>
            <Header/>

   <section className="z-10  flex flex-col-reverse items-center justify-items-center py-4 justify-center md:flex-row  bg-gradient-to-r from-amber-50 to-orange-300">
    < div className=" w-4/6 ml-4 flex flex-col justify-between  text-5xl text-center md:w-2/6 md:text-left">
    <div className="flex justify-center md:justify-start">
            <div className="flex flex-row justify-between ">
                 
                    <h1 className="pb-2 afacad-flux-font3  text-transparent bg-gradient-to-r from-orange-400 to-red-500   bg-clip-text font-bold">Enjoy the Slice {" "}</h1>
                    <div>
                        😃
                    </div>
            </div>
    </div> 
            
    <div className="text-sm arima-font2 font-bold mt-3 mb-3 italic text-slate-600">
                The Pizza App lets you order your favorite pizza from the comfort of your home. 
                Enjoy the best pizza in town with just a few clicks.
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
    <div>
        <img
       src={pizza2}
       width={550}
       height={550}
        />
    </div>

    </section>
    <section className='flex flex-col md:flex-row  justify-center md:justify-between mb-2 py-5 md:flex-row bg-gradient-to-r space-x-* from-amber-50 to-orange-300 mt-2'>
        <div className='mt-7 mb-7 ml-7 flex items-center rounded-3xl'>
            <img className='rounded-3xl'
             src={cook}
             width={400}
             height={400}
             />
        </div>
        <div className='afacad-flux-font3 font-extrabold basis-[50%] flex flex-col justify-center md:justify-start '>
                <div className='text-5xl afacad-flux-font5 font-extrabold bg-gradient-to-l mt-6 ml-4 from-orange-400 to-red-500 text-transparent bg-clip-text'>
                    Cooked by the best <br/> chefs in the world
                </div>
                    <p className='text-base mt-3 leading-relaxed font-semibold text-orange-600'>
                There are many benifits regarding to that but the main ones are:
                    </p>
                <div>
                    <div className='flex flex-row items-center  ml-7 mt-7 justify-start'>
                    <div className='text-amber-500 w-10 h-10 flex items-center justify-center'>
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                        </div>
                        <div className='text-3xl afacad-flux-font5 font-bold ml-5 bg-gradient-to-l  from-orange-400 to-red-500 text-transparent bg-clip-text'>
                            <span> Perfect Test</span>           
                        </div>

                    </div>
                    <div className='flex flex-row items-center  ml-7 mt-7 justify-start '>
                        <div className='text-amber-500 w-10 h-10 flex items-center justify-center'>
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                        </div>
                        <div className='text-3xl afacad-flux-font5 font-bold ml-5 bg-gradient-to-l  from-orange-400 to-red-500 text-transparent bg-clip-text'>
                            <span> Prepair Quickly</span>           
                        </div>

                    </div>
                    <div className='flex flex-row items-center  ml-7 mt-7 justify-start'>
                        <div className='text-amber-500 w-10 h-10 flex items-center justify-center' >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                        </div>
                        <div className='text-3xl afacad-flux-font5 font-bold ml-5 bg-gradient-to-l  from-orange-400 to-red-500 text-transparent bg-clip-text'>
                            <span> Food hygeine guaranted</span>           
                        </div>

                    </div>
                </div>
                <div className='flex justify-between montserrat-font1  mr-3 mt-9'>
                    <div className='flex flex-col mr-5 mt-6   p-2 rounded-2xl shadow-2xl hover:shadow-none justify-center items-center'>
                        <div className='rounded-full bg bg-slate-50 text-center h-20 w-20 mb-5 flex items-center justify-center'>
                                <img
                                src={icon1}
                                />
                        </div>
                        <div className='font-bold text-xl mb-3'>Order Food</div>
                        <p className='text-center italic'>As easy as 1,2,3 <br/> Just select your <br/>favorite pirzza and<br/> place your order </p>
                    </div>
                    <div className='flex flex-col mr-5 mt-6   p-2 rounded-2xl shadow-2xl hover:shadow-none justify-center items-center'>
                        <div className='rounded-full bg bg-slate-50  text-center h-20 w-20 mb-5 flex items-center justify-center'>
                                <img
                                src={icon2}
                                />
                        </div>
                        <div className='font-bold text-xl mb-3'>Pickup Food</div>
                        <p className='text-center italic'> Pick up your order<br/> from the nearest<br/> store or get it <br/>delivered to your <br/>doorstep. </p>
                    </div>
                    <div className='flex flex-col mr-5 mt-6   p-2 rounded-2xl shadow-2xl hover:shadow-none justify-center items-center'>
                        <div className='rounded-full bg bg-slate-50  text-center h-20 w-20 mb-5 flex items-center justify-center'>
                                <img
                                src={icon3}
                                />
                        </div>
                        <div className='font-bold text-xl mb-3'>Order Food</div>
                        <p className='text-center italic'>As soon as you get<br/> your order, enjoy the<br/> delicious pizza with<br/> your loved ones.
                        </p>
                    </div>
                </div>

        </div>
    </section>
    <div className="mx-auto">
                <div className="flex flex-wrap  justify-center">
                    {productsData.map((item) => {
                        return (
                            item.inStock && (
                                <div className="p-4 md:w-1/3" key={item._id}>
                                    <Link to={`/product/${item._id}`}>
                                        <div className="overflow-hidden border shadow-xl hover:shadow-2xl rounded-lg border-opacity-60">
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
            </div>

            

    <Footer/>
     
    </div>
)
}
export default Home;