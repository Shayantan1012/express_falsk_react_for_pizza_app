import addProductSvg from '../../assets/Addproduct.svg'
import Header from '../../Components/header';
import Footer from '../../Components/Footer';
function AddProductPresentation({handelProductInput,submitProductForm,handleImageChange}){
return (
    <div>
        <Header/>
    <div className='flex montserrat-font1 flex-col md:flex-row bg-gradient-to-r from-amber-50 to-orange-300 justify-center md:justify-between'>
        <div className='hidden md:flex justify-center items-center '>
          <img
          src={addProductSvg}
          />
        </div>
        <div className='flex flex-col items-start max-w-md md:w-4/6  shadow-2xl rounded-lg mr-4'>
        <h1 className=' arima-font2 font-bold text-2xl mb-3 mt-2 ml-3 '>Add Product</h1>
        <div className=''>
        <from className="flex  flex-col p-5 items-start justify-end w-full" method='POST' encrypt="multipart/form-data">
            <label className='mb-3 arima-font2 font-semibold'>Product Name<span className='text-red-600'>*</span></label>
            <input
            type='text'
            required
            minLength={5}
            maxLength={60}
            name='productName'
            id='productName'
            placeholder='Margareta Pizza'
            onChange={handelProductInput}
            className='w-full h-[50px] border border-gray-300 pl-2 rounded-lg focus:border-indigo-500 sm:text-sm'
            />          
            <label className='mb-3 arima-font2 font-semibold'>Description</label>
            <textarea
            required
            minLength={20}
            maxLength={200} // Adjusted for more text if needed
            name='description'
            id='description'
            onChange={handelProductInput}
            rows="4" // Number of visible text lines
            className='w-full border border-gray-300 pl-2 pt-2 rounded-lg focus:border-indigo-500 sm:text-sm'
            ></textarea>
            <label className='mb-3 arima-font2 font-semibold'>Product price<span className='text-red-600'>*</span></label>
            <input
            type='number'
            required
            placeholder='450'
            name='price'
            id='price'
            onWheel={(e) => e.target.blur()} // Prevents scroll changes
            onChange={handelProductInput}

            className='w-full h-[50px] border border-gray-300 pl-2 rounded-lg focus:border-indigo-500 sm:text-sm'
            />          
            <label className='mb-3 arima-font2 font-semibold'>Product quantity<span className='text-red-600'>*</span></label>
            <input
            type='number'
            required
            placeholder='5'
            name='quantity'
            id='quantity'
            onWheel={(e) => e.target.blur()} // Prevents scroll changes
            onChange={handelProductInput}

            className='w-full h-[50px] border border-gray-300 pl-2 rounded-lg focus:border-indigo-500 sm:text-sm'
            />   
            <label className='mb-3 arima-font2 font-semibold'>In Stock<span className='text-red-600'>*</span></label>
            <select
            required
            name='inStock'
            id='inStock'
            onChange={handelProductInput}

            className='w-full h-[50px] border border-gray-300 pl-2 rounded-lg focus:border-indigo-500 sm:text-sm'
        >
                                    <option value='TRUE'>True</option>
                                    <option value="FALSE">False</option>
                </select>
            <label className='mb-3 arima-font2 font-semibold'>Select Catagory<span className='text-red-600'>*</span></label>
            <select
            id='catagory'
            name='catagory'
            onChange={handelProductInput}

            className='w-full h-[50px] border border-gray-300 pl-2 rounded-lg focus:border-indigo-500 sm:text-sm'
            >
                                    <option value="veg">Vegetarian</option>
                                    <option value="non-veg">Non-Vegetarian</option>
                                    <option value="drinks">Soft drinks</option>
                                    <option value="sides">Sides</option>
                </select>          
        
            </from>
            <label className='mb-3 ml-5 arima-font2 font-semibold'>Product image<span className='text-red-600 text-xs'>(.jpg,.png,.jpeg)</span></label>
            <input
            type='file'
            required
            name='imageURL'
            id='imageURL'
            accept='.jpg,.png,.jpeg,.webp'
            onChange={handleImageChange}
            className='w-full h-[50px] mb-3 ml-4 mt-2 pl-2 rounded-lg focus:border-indigo-500 sm:text-sm'
            />      
            <button
            type="submit"
            onClick={submitProductForm}
            className="w-[98%] ml-1  mb-3  bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300 ease-in-out">
            Add product
            </button>
         </div>
        </div>
    </div>
        <Footer/>
    </div>
)
}
export default AddProductPresentation;