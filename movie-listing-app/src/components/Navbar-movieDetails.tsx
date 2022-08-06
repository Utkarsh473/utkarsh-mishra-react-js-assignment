import React from "react";

type Props = {
    changeDisplay: Function
}

function Navbar_movieDetails(props: Props)
{
    const {changeDisplay} = props
    
    const el = (
        <>
        <div className = "Nav-parent">
            <button className="Nav-child-button" onClick={() => changeDisplay()}>Back to Home</button>
        </div>
        </> 
        )

    return el;
}

export default Navbar_movieDetails;
