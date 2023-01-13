import React from "react";
import black_adam from "../../black_adam.png"
import './Upcoming.css'
const Upcoming = () =>{
    return (
        <>
        <div >
        <img className="black_adam" src={black_adam} alt="black_adam" id="black_adam"/>
            <div className="black_adam_about">      
                <h3>Movies Name:-Black-Adam </h3>
                <h3>Relase Year:-2021</h3>        
            </div>
        </div>
        </>
    )
}
export default Upcoming;