import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../../Components/Footer/Footer'
import MainHeader from '../../Components/MainHeader/MainHeader'

import './about.css'
import image from '../../Images/Others/history.jpg'


function About() {
    const [scrollPosition, setScrollPosition] = useState(0);


    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };



    }, []);

    const dispatch = useDispatch()

    let handleBodyCick = () => {




    }




    return (
        <div style={{ backgroundColor: "rgb(240, 240, 240)", overflow: "hidden" }}>


            <MainHeader scrollPosition={scrollPosition} />




            <div className="container-fluid w-100 about-container w-100 p-0"  >

    
                <div className="row p-2 w-100 m-0 p-0">

               <div className="w-100 d-flex flex-row justify-content-center mt-md-4 mt-sm-1 mb-md-4 mb-sm-2">
               <span className="session-header ">About Vazhalikkavu Temple</span>
               </div>


                    <div className="col-md-1 col-sm-12 col-12 m-0">
                      
                    </div>

                    <div className="col-md-10 col-sm-12 col-12  p-0 m-0">


                        <div className="row w-100 p-0 m-0 ">

                            <div className="col-md-8 col-sm-12 col-12 about-text m-0 round-border">
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                            </div>
                           

                            <div className="col-md-4 col-sm-12 col-12 " >
                               <img src={image} alt="" className="about-image" />
                            </div>


                        </div>


                    </div>

                    <div className="col-md-1 col-sm-12 col-12">
                        
                    </div>


                </div>

            </div>

            <Footer />
        </div>
    )
}

export default About
