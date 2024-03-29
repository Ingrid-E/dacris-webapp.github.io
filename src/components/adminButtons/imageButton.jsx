import React from 'react'
import './buttons.css'


const ImageButton = (props) => {
    const {text, sendFile} = props

    return (
        <div className="admin_imageButton">
            <label htmlFor="product_img">
                {text}
                <input type="file" id="product_img"
                accept='image/png, image/jpeg'
                onChange={(e)=> {
                    sendFile(e)
                }}
                />
            </label>

        </div>
    )
}

export default ImageButton