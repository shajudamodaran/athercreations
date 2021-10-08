
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Footer from '../../Components/Footer/Footer';
import MainHeader from '../../Components/MainHeader/MainHeader';
import PhotoFolder from '../../Components/PhotoFolder/PhotoFolder';
import YearBadge from '../../Components/YearBadge/YearBadge';




import './gallery.css'

function Gallery() {

    const [scrollPosition, setScrollPosition] = useState(0);
    let [activeYear, setActiveYear] = useState("Show All")


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


    return (
        <div style={{ overflow: "hidden" }} className='w-100 p-0 bg-light' >

            <MainHeader scrollPosition={scrollPosition} />

            <div className="container-fluid main-container " style={{ minHeight: "100vh" }}>

                <div className="row p-2">

                    <div className="d-flex flex-column align-items-center mt-md-4 mb-md-2">

                        <h2 className="m-0">Photo Gallery</h2>

                        <span className="subline-text">The photos of the temple are categorized here by the event. You can go through each events</span>

                        <div className="year-badge-container flex-wrap">
                            <YearBadge year={"Show All"} state={activeYear} setState={setActiveYear} />
                            <YearBadge year={2019} state={activeYear} setState={setActiveYear} />
                            <YearBadge year={2020} state={activeYear} setState={setActiveYear} />
                            <YearBadge year={2021} state={activeYear} setState={setActiveYear} />
                           
                        </div>

                    </div>

                    <div className="col-md-2 col-sm-12 col-12">

                        <PhotoFolder />

                    </div>

                    <div className="col-md-2 col-sm-12 col-12">

                        <PhotoFolder />

                    </div>

                    <div className="col-md-2 col-sm-12 col-12">

                        <PhotoFolder />

                    </div>

                    <div className="col-md-2 col-sm-12 col-12">

                        <PhotoFolder />

                    </div>


                    <div className="col-md-2 col-sm-12 col-12">

                        <PhotoFolder />

                    </div>


                    <div className="col-md-2 col-sm-12 col-12">

                        <PhotoFolder />

                    </div>


                    <div className="col-md-2 col-sm-12 col-12">

                        <PhotoFolder />

                    </div>


                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Gallery
