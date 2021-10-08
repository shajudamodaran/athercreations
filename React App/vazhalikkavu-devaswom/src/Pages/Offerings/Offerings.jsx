import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Footer from '../../Components/Footer/Footer';
import MainHeader from '../../Components/MainHeader/MainHeader';
import { ClickHereIcon } from '../../Icons/Icons';
import './offerings.css'

function Offerings() {

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


    return (
        <div style={{ overflow: "hidden", backgroundColor: "#F3F4F5" }} className='w-100 p-0' >

            <MainHeader scrollPosition={scrollPosition} />

            <div className="container-fluid main-container  " style={{ minHeight: "100vh" }}>

                <div className="container-fluid">
                    <div className="row p-0">
                        <div className="col-md-2 col-sm-12 col-12 p-0 m-0"></div>

                        <div className="col-md-8 col-sm-12 col-12 d-flex flex-column p-0 m-0 align-items-center pt-2">


                                <div className="online-booking-container">
                                    <span>Click here to book your Offering online.</span>
                                    <button>
                                        <ClickHereIcon/>
                                        Book Now</button>
                                </div>


                            <table className="offer-table">

                                <thead>
                                    <tr>
                                        <th className="text-center">Sl.No</th>
                                        <th>Pooja Name</th>
                                        <th>Rate</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="text-center">1</td>
                                        <td>Name 1</td>
                                        <td>Rs.10/-</td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">2</td>
                                        <td>Name 1</td>
                                        <td>Rs.10/-</td>
                                        <td>Only on sunday</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">3</td>
                                        <td>Name 1</td>
                                        <td>Rs.10/-</td>
                                        <td> </td>
                                    </tr>
                                </tbody>

                            </table>


                        </div>

                        <div className="col-md-2 col-sm-12 col-12"></div>
                    </div>
                </div>




            </div>

            <Footer />
        </div>
    )
}

export default Offerings
