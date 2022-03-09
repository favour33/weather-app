import React from "react";
import picture from "../pic/sunnyPic.PNG"
import '../css/image.css'

const MiddleImage = () => {
    return (
        <div>
            <img id="mainImage" src={picture} alt="Current Weather Here" />
        </div>
    )
}

export default MiddleImage