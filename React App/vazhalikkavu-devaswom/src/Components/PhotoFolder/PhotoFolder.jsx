import React from 'react'
import './photofolder.css'

import image from '../../Images/SliderImages/3.jpg'
import { ImageShareIcon } from '../../Icons/Icons'

function PhotoFolder() {
    return (
        <div className="photo-folder-container">
            <div className="folder-image p-2" style={{ backgroundImage: `url('${image}')` }} />

            <div className="w-100 folder-text-container">

                <div className="d-flex flex-column">
                    <h6 className="m-0 folder-tittle">Vazhalikkavu Vela 2020</h6>
                    <span className="folder-dsc">2020 vazhalikkavu vela photos (24)</span>
                </div>

                <ImageShareIcon />
            </div>
        </div>
    )
}

export default PhotoFolder
