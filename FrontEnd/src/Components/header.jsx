import pizzalogo from '../assets/pizza1.png'
import{useSelector} from 'react-redux'
import { logout } from '../Redux/Slice/AuthSlice';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Cart from '../assets/cart.svg'
import { useEffect } from 'react';
import { getCartDetails } from '../Redux/Slice/cartSlice';
function Header(){
    const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
    const dispatch=useDispatch();
    async function handelLogout(e){
        e.preventDefault();
        dispatch(logout());
    }
    const navigate=useNavigate();
    const {cartData}=useSelector((state)=> state.cart);
    async function fetchCartDetails() {
        const res = await dispatch(getCartDetails());
        const {isUnauthorised}=res?.payload;
        if(isUnauthorised) {
            console.log("unauthorized");
           await dispatch(logout());
        }
    }
        useEffect(() => {
            if(isLoggedIn) {
                fetchCartDetails();
            }
        }, []);

    return (
        <div className='flex  arima-font2 flex-row justify-between bg-gradient-to-r from-amber-50 to-orange-300 '>
       <div className="flex flex-col items-center gap-2 ml-4">
                <div>
                    <img
                    src={pizzalogo}
                    />
                </div>
                <div className="font-semibold arima-font2  text-slate-700">
                Pizza Delight
                </div>

        </div>
        <div className=' hidden md:flex item-center '>
        <ul className='flex items-center gap-5 mr-9 font-semibold '>
        <button onClick={()=>navigate('/')} className='text-slate-600 hover:text-slate-800 shadow-xl hover:shadow-lg rounded-lg p-2'>Home {' '}</button>
        <button className='text-slate-600 hover:text-slate-800 shadow-xl hover:shadow-lg rounded-lg p-2 ' onClick={()=>navigate('/product/allProduct')}>Menu {' '}</button>

        <button onClick={()=>navigate('/about')} className='text-slate-600 hover:text-slate-800 shadow-xl hover:shadow-lg rounded-lg p-2'>About {' '}</button>
        <li className='text-slate-700 hover:text-slate-800  hover:text-slate-600 bg-yellow-300 hover:bg-yellow-500 p-2 flex items-center 
        justify-center shadow-lg rounded-lg'>{isLoggedIn ? (<Link onClick={handelLogout}>Log Out</Link>): (<Link to={'/auth/login'}>Log In</Link>)}</li>

{isLoggedIn && (
          <Link to={'/cart'}>
          <li className='w-[60px] h-full flex shadow-lg flex-row content-fit justify-center items-center  hover:bg-amber-300 rounded-lg'>
            <img src={Cart}/>
            {' '}
           
            <p className='text-black ml-4 font-bold inline'> {cartData?.items?.length}</p>
          </li>
          </Link>
        )}

        </ul>
        </div>

        </div>
)
}
export default Header;