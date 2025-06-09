import { useState } from "react";
import SignUpPresentation from "./SignUpPresentation";
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";
import{useNavigate} from 'react-router-dom'
import { createAccount } from "../../Redux/Slice/AuthSlice";
import BarLoader from "react-spinners/BarLoader";

function SignUp(){
  let [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch();
const [signUpState,setSignUpState]=useState({
firstName:'',
email:'',
mobileNumber:'',
password:'',
})
 function  handelUserInput(e){
const {name,value}=e.target;
setSignUpState({
    ...signUpState,
    [name]:value,
})
 }
async function handelFormSubmit(e){
  e.preventDefault();
if(!signUpState.firstName || !signUpState.firstName ||!signUpState.mobileNumber || !signUpState.password){
toast.error("Please fill the all boxes!!!!");
return ;
}    
if(signUpState.mobileNumber.length<10 || signUpState.mobileNumber.length>10){
    toast.error("Please give a valid mobilenumber!!!!");
    return ;
    }

    if(signUpState.password.length<6 ){
      toast.error("Please give a valid Password !!!!");
      return ;
      }
  
if(!signUpState.email.includes('@') || !signUpState.email.includes('.')){
        toast.error("Please give a valid emailId!!!!");
        return ;
        }
        setLoading(true)
try{
  const apiRespone=await dispatch(createAccount(signUpState));
  if(apiRespone.payload.data.success){
    navigate('/auth/login')
  }
}catch(error){
  console.log(error)
}finally{
  setLoading(false)
}
return ;
    }

   

 return (
  <div className="h-screen w-screen flex justify-center items-center">
  {loading ? (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <BarLoader color={'#123abc'} loading={loading} width={150} />
    </div>
  ) : (
    <SignUpPresentation
    handelUserInput={handelUserInput}
    handelFormSubmit={handelFormSubmit}
      />
      )}
</div> )
}
export default SignUp;