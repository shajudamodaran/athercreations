import React from 'react'

function ProgramCard({data}) {
    return (
        <div className="program-card m-2">
            <div className="program-card-image p-2" style={{ backgroundImage: `url('${data.image}')` }} />
            <div className="w-100 d-flex justify-content-center mt-2">
                <span className="program-card-header ">{data.tittle}</span>
            </div>
            <p className="program-card-description mt-2">{data.dsc}</p>
            <div className="w-100 d-flex justify-content-center mt-2 ">
                <button className="program-card-btn">Read More...</button>
            </div>
        </div>
    )
}

export default ProgramCard
