import React from 'react'
import './caretakers.css'

import caretakerimage from '../../Images/Caretakers/avatar.jpg'

function Caretakers() {
    return (

        <div className="m-0 pt-1 d-flex flex-column align-items-center person-container">

            <span className="session-header mt-2">TEMPLE CARETAKERS</span>


            <div className="row p-3 text-white w-100 mt-2 no-scrollbar">



                <div className="col-md-3 col-sm-6 col-6 d-flex justify-content-center">
                    <div className="people-card">
                        <img src={caretakerimage} alt="" className="person-avatar" />
                        <span className="people-card-name">Name of the person</span>
                        <span className="people-card-desi">Designation</span>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-6 d-flex justify-content-center">
                    <div className="people-card">
                        <img src={caretakerimage}  alt="" className="person-avatar" />
                        <span className="people-card-name">Name of the person</span>
                        <span className="people-card-desi">Designation</span>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-6 d-flex justify-content-center">
                    <div className="people-card">
                        <img src={caretakerimage}  alt="" className="person-avatar" />
                        <span className="people-card-name">Name of the person</span>
                        <span className="people-card-desi">Designation</span>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-6 d-flex justify-content-center">
                    <div className="people-card">
                        <img src={caretakerimage}  alt="" className="person-avatar" />
                        <span className="people-card-name">Name of the person</span>
                        <span className="people-card-desi">Designation</span>
                    </div>
                </div>




                <span style={{cursor:"pointer",fontSize:"small"}} className="w-100 text-end pe-4 mt-2">More...</span>

            </div>


        </div>

    )
}

export default Caretakers
