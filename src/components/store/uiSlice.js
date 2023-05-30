import { createSlice } from "@reduxjs/toolkit";
import img1 from "../../assets/shoe images/shoe1.png"
import img2 from "../../assets/shoe images/shoe2.png"
import img3 from "../../assets/shoe images/shoe3.png"
import img4 from "../../assets/shoe images/shoe4.png"
import img5 from "../../assets/shoe images/shoe5.png"
import img6 from "../../assets/shoe images/shoe6.png"
import img7 from "../../assets/shoe images/shoe7.png"
import img8 from "../../assets/shoe images/shoe8.png"
import img9 from "../../assets/shoe images/shoe9.png"
import user1 from "../../assets/user images/user1.jpeg"
import user2 from "../../assets/user images/user2.jpg"
import user3 from "../../assets/user images/user3.jpg"
import user4 from "../../assets/user images/user4.jpg"
import user5 from "../../assets/user images/user5.jpeg"

export const shoes = [img1,img2,img3,img4,img5,img6,img7,img8,img9]
export const users = [user1, user2, user3,user4 ,user5]
const uiSlice = createSlice({
    name:"ui",
    initialState:{
        items:[
            {   
                id:"s1",
                name:"Nike Men's Air Max",
                img:img1,
                price:150,
                
            },
            {   
                id:"s2",
                name:"Nike Men's Air Max SC ",
                img:img2,
                price:165,
                
            },
            {   
                id:"s3",
                name:"Air Max 95 ",
                img:img3,
                price:200,
                
            },
            {   
                id:"s4",
                name:"Nike Air Max 90 ",
                img:img4,
                price:152.9,
                
            },
            {   
                id:"s5",
                name:"Air Max 95 Oil Grey ",
                img:img5,
                price:141,
                
            },
            {   
                id:"s6",
                name:"Nike Men's Air Max SC ",
                img:img6,
                price:150,
                
            },
            {   
                id:"s7",
                name:"Nike Legend Essential 2 ",
                img:img7,
                price:139,
                
            },
            {   
                id:"s8",
                name:"Nike Men's SuperRep Go",
                img:img8,
                price:125,
                
            },
            {   
                id:"s9",
                name:"Jordan 12 Gym Red Tulip ",
                img:img9,
                price:190,
                
            },
        ],
        cartIsVisible:false
    },
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice