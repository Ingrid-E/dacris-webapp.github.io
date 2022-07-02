
import React from "react";
import "../Components/components.css"
import left from "../Assets/left.png"
import right from "../Assets/right.png"


function ButtonsNext() {
    return (
        <div className="ButtonNext">
            <div className="container-right">
                <div className="dot">
                <a href="next-right"><img src={right} style={{ width: "35px", position:"relative", bottom:"7px", right:"3px"}}/></a>
                </div>
            </div>
            <div className="container-left">
                <div className="dot">
                <a href="next-left"><img src={left} style={{ width: "35px", position:"relative", bottom:"7px", right:"10px"}}/></a>
                </div>
            </div>
        </div>
    );
}

export default ButtonsNext;