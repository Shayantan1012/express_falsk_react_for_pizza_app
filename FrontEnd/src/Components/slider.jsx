
import { useEffect, useState } from 'react'
import Styles from './Slider.module.scss'
import { GoArrowRight ,GoArrowLeft } from "react-icons/go";

function Slider({images}){

    const [slider,setSlider]=useState(0)

    function change_plus(){
        setSlider(slider+1<images.length?slider+1:0)
    }
    function change_minus(){
        setSlider(slider-1>0?slider-1:images.length-1)
        }

        useEffect(() => {
            const interval = setInterval(() => {
                change_plus();
            }, 3000);
    
            return () => clearInterval(interval); // Cleanup on unmount
        }, [slider]); // Depend on `slider` to restart the interval on change

    return (
        <div className={Styles.slider}>
           {
            images.map((image, idx) => {
                return slider === idx && (
                    <div key={idx} className={Styles.sliderImage_block}>
                        <img src={image} alt="image" />
                        <div className={Styles.navigation}>
                            <GoArrowLeft className={Styles.arrow} onClick={change_minus} />
                            <GoArrowRight className={Styles.arrow} onClick={change_plus} />
                        </div>
                    </div>
                );
            })
}
    
        </div>
    )
}

export default Slider