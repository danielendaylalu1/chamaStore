import React from "react";
import classes from "./testimonialsUsers.module.css";
import { users } from "../../store/uiSlice";

const TestimonialsUsers = () => {
  return (
    <ul className={classes.users}>
      <li className={classes.user}>
        <img src={users[0]} alt="user1" />
        <h2>James oliver</h2>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum
        </p>
      </li>
      <li className={classes.user}>
        <img src={users[1]} alt="user2" />
        <h2>Daisy james</h2>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum
        </p>
      </li>
      <li className={classes.user}>
        <img src={users[2]} alt="user3" />
        <h2>Lucy david</h2>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum
        </p>
      </li>
      {/* <li className={classes.user}>
        <img src={users[3]} alt="user4" />
      </li>
      <li className={classes.user}>
        <img src={users[4]} alt="user5" />
      </li> */}
    </ul>
  );
};

export default TestimonialsUsers;
