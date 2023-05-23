import React from "react";
import "./course.css"

const Course = () =>{
return(
<div>
    <h2 className="explore">Explore Course</h2>
    <div className="whole">
    <div className="main"> 
    <div className="table" >
        <div className='row1'></div>
        <div className='row2'>
            <div className='row3'><p><i class='bx bx-chevron-left'></i> <span>code</span></p></div>
            <div className='row4'><p><span>output </span> <i class='bx bx-chevron-right'></i></p></div>
        </div>
        <div className='row5'>
        <input className='row6'/>
        <div className='row7'></div>
        </div>
        <div className='row8'>
            <button className='row9'>Run</button>
        </div>
    </div>
   <div className="paragraph2">
    <p className="beginners" >Beginners Welcome</p>
    <h2 className="coding">Start coding in seconds.</h2>
    <p className="goahead">Go ahead , give it a try. our hands-on learning environment means you'll be writing real code from your very first lesson.</p>
    <button className="start">Start Now</button>
   </div>
    </div>
   
    <div className="line"></div>
    <div className="line1"></div>
    </div>

</div>
);
}
export default Course
