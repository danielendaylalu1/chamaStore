import React from "react";
import classes from "./testimonials.module.css"
import TestimonialsUsers from "./TestimonialUsers";

const Testimonials = ()=>{
    return(
        <div className={classes.testimonials}>
            <h3>TESTIMONIALS</h3>
            <h1>What's Our Clients Say</h1>
            <TestimonialsUsers />
        </div>
    )
}

export default Testimonials