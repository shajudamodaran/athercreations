import React, { useEffect,useState } from 'react'
import './imageslider.css'
import $ from 'jquery'; 

import image1 from '../../Images/SliderImages/1.jpg'
import image2 from '../../Images/SliderImages/2.jpg'
import image3 from '../../Images/SliderImages/3.jpg'


function ImageSlider() {

    let [imageClass,setImageClass]=useState(['slide-image','slide-image-hide','slide-image-hide'])
    let myIndex = 0;

    useEffect(() => {

        startSliding();


    }, [])



    let startSliding=()=>{
       
     try {

        let images_count = $("#slderImages > img").length
        let x = document.getElementById("slderImages").children;
        myIndex++;
        if (myIndex > images_count) { myIndex = 1 }
       
        let newArray=['slide-image-hide','slide-image-hide','slide-image-hide']
        newArray[myIndex-1]='slide-image'

        setImageClass(newArray)
        setTimeout(startSliding, 5000); // Change image every 4 seconds
         
     } catch (error) {

        console.log(error);
         
     }
    }


    return (
        <>
            <div className="image-slider">

                <div className="slide-images d-flex flex-row" id="slderImages">
                    <img className={imageClass[0]}src={image1} alt="" />
                    <img className={imageClass[1]} src={image2} alt="" />
                    <img className={imageClass[2]} src={image3} alt="" />
                </div>

                {/* <div className="black-shade">

                </div> */}

                <div className="image-slider-text-conntainer">
                    {/* <span className="tittle-name">ശ്രീ വാഴലിക്കാവ് ഭഗവതി ക്ഷേത്രം</span> */}
                 <div className="know-more-btn">
                    കൂടുതൽ അറിയുക...
                    </div> 
                </div>

                <div className="address-marquee-container">

                    <marquee scrollamount="4" behavior="" direction="left">
                        <span className="" >Address: Vazhalikkavu Bhagavathy Temple, Vazhalippadam,
                            Painkulam , Thrissur District. Kerala ( PIN : 679531 )...................
                            (Marquee)*</span>
                    </marquee>

                </div>

            </div>

        </>
    )
}

export default ImageSlider
