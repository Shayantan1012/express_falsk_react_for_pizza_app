
import mic from "../../assets/mic.svg";
import { useEffect, useState } from "react";
import foodSvg from "../../assets/food.svg";
import { useDispatch, useSelector } from "react-redux";
import { predictImage } from "../../Redux/Slice/predictSLice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ColorRing } from 'react-loader-spinner';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useSpeechSynthesis } from 'react-speech-kit';
import SiriWaveComponent from "./siri_wave";
import { voiceAssitenceResponse } from "../../Redux/Slice/voiceAssi";

function VoiceAssistance({ closePopUp ,welcomeCheck})  {

  const [welcomeMessage, setWelcomeMessage] = useState(welcomeCheck());
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const [lastTranscript, setLastTranscript] = useState("");
  const [pauseTimer, setPauseTimer] = useState(null);


    const products = useSelector((state) => state.product.productsData);
    const dispatch = useDispatch();
    const { speak } = useSpeechSynthesis();


    const navigate = useNavigate();

    

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'en-US'
  }); 
  
  const stopListening = () => SpeechRecognition.stopListening();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

const speechSynthesis = (text) => {
  speak({ text: text, lang: 'en-US' , pitch:1.5});
};

async function handleVoiceCommand(transcript) {
  try{
    const response = await dispatch(voiceAssitenceResponse(transcript))
    console.log("Response from voice command:", response);
    if (response?.payload?.status === 200 ) {
      const message = response?.payload?.data?.message;
      speechSynthesis(message);
      resetTranscript(); // Clear the transcript after processing
    } 
  }
  catch (error) {
    console.error("Error in voice command handling:", error);
    toast.error("An error occurred while processing your command.");
  }


}

useEffect(() => {

    setTimeout(() => {
      resetTranscript();
      startListening();
      console.log("Listening started");
    }, 500);
}, []);

useEffect(() => {
  if (!transcript) return;

  // If transcript changed, reset the pause timer
  if (transcript !== lastTranscript) {
    setLastTranscript(transcript);

    // Clear previous timeout
    if (pauseTimer) {
      clearTimeout(pauseTimer);
    }

    // Start a new pause timer (e.g. 3 seconds of no input)
    const timer = setTimeout(() => {
      console.log("No speech input for 3 seconds, sending data...");
      handleVoiceCommand(transcript);  // your existing function
      resetTranscript();               // optional: clear after send
    }, 3000); // 3 seconds of pause

    setPauseTimer(timer);
  }
}, [transcript]);



if(welcomeMessage) {
  console.log("Welcome message triggered");
  speechSynthesis("Welcome to the Voice Assistant. How can I assist you today?");
  setWelcomeMessage(false);
}




    return (
<div className="montserrat-font1 fixed inset-0 z-50 flex items-center justify-center bg-slate-500 bg-opacity-50">
        <div className=" w-[90vw] h-[95vh] sm:w-[80vw] md:w-[65vw] lg:w-[55vw] 
                    bg-gradient-to-br from-black via-white-600 to-white-400 
                    rounded-2xl p-6 overflow-y-auto relative">

    <button
      className="absolute top-4 right-6 text-white text-4xl hover:text-red-400"
        onClick={() => {
        stopListening();
        closePopUp();
        resetTranscript();
        }}   
   aria-label="Close"
    >
      &times;
    </button>

    {/* Title */}
    <div className="flex flex-col items-center mb-6">
        <img src={mic} alt="Voice Icon" className="w-16 h-16 mb-4" />
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Voice Assistance
        </h1>
    </div>
{listening &&
    <div className="w-full flex flex-row  justify-center items-center ">
        <SiriWaveComponent isSpeaking={true} />
    </div>

}

    {/* Transcript Display */}
    <div className=" w-full flex justify-center items-center bg-transparent text-white p-4 rounded-xl min-h-[100px] mb-6 overflow-y-auto">
      <p className="whitespace-pre-wrap">{transcript || "Say something..."}</p>
    </div>

    <div className="flex flex-col items-center mb-6">
{
  isSpeaking?
    <button onClick={()=>{
      startListening()
      setIsSpeaking(!isSpeaking)}} className="flex flex-col justify-center items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-2xl transition ">
      <div className="flex justify-center items-center ">
        Start Listening
    </div>
    </button>:
    <button  onClick={()=>{
      stopListening()
      setIsSpeaking(!isSpeaking )
      resetTranscript()
      navigate("/about")
      }} className="flex flex-col justify-center items-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-2xl transition ">
      <div className="flex justify-center items-center ">
        Stop Listening
    </div>
    </button>
}

      <div className="text-center mt-4 text-white">
         {listening ? "🟢 Listening..." : "🔴 Not Listening"}
      </div>

</div>


    {/* Control Buttons */}
    <div className="flex justify-center gap-4">


{/* 
    <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-2xl transition"
        onClick={() => speechSynthesis(transcript)}

      >
        Speak
      </button> */}

    </div>

  </div>
</div>
    );
}

export default VoiceAssistance;
