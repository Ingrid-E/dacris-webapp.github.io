import React from 'react'
import './buttons.css'


const CheckButton = (props) => {
    const {checkedButton} = props

    return (
        <div className="admin_checkButton" 
        onClick={()=>!checkedButton} 
        style={checkedButton? {backgroundColor: "#115E83"}:
                        {backgroundColor: "white"}}>
            
        </div>
    )
}

export default CheckButton