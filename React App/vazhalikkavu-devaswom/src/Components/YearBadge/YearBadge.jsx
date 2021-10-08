import React from 'react'
import './yearbadge.css'

function YearBadge({year,state,setState}) {
    return (
        <div className={state==year?"year-badge-active" :"year-badge" } onClick={()=>{setState(year)}}>
            {year}
        </div>
    )
}

export default YearBadge
