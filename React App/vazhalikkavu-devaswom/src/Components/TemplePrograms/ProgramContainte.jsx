import React from 'react'
import { PROGRAMS } from '../../Constants/Constants'

import './program.css'
import ProgramCard from './ProgramCard'

function ProgramContainte() {


    return (
        <div className="m-0 mt-5 pt-1 d-flex flex-column align-items-center">
            <span className="session-header ms-4" style={{ width: 'fit-content' }}>TEMPLE PROGRAMS</span>
            <div className="container-fluid mt-2 p-0">
                <div className="programs-row overflow-scroll">

                    {
                        PROGRAMS!=null?

                        PROGRAMS.map((obj,key)=>{
                            return(

                                <ProgramCard data={obj}/>

                            )
                        })


                        :console.log("No programs")
                    }
                    
                   
                    <div className="program-card-hide-in-small d-flex flex-column justify-content-center align-items-center d-none d-md-flex ">
                        <button className="program-card-more-btn">
                            <i className="fa fa-chevron-right" />
                        </button>
                        <span className="mt-2 ">See more programs...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgramContainte
