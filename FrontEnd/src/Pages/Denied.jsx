import { useNavigate } from "react-router-dom";

function Denied(){
    const navigate=useNavigate();

return (
    <main className="flex montserrat-font1 justify-center items-center  h-screen bg-gradient-to-r from-red-200 to red-500">
<div className="font-extrabold text-9xl text-transparent bg-gradient-to-r from-red-800 to red-300 bg-clip-text ">
    404
</div>
<div className="absolute px-2 text-sm text-white bg-black rounded rotate-12">
          Access Denied
        </div>
        <button onClick={()=>navigate(-1)} className="p-3 font-semibold text-center flex items-center border-solid text-xl border-amber-600 border bg-amber-400 hover:bg-amber-200 h-[50px] justify-center rounded-lg w-[150px]">Go Back</button>

    </main>
)
}
export default Denied;