import React, { useState } from "react";
import CheckboxList from "./CheckboxList";
import Nav from "../Nav";




const UserForm = props => {
   const [rec, setRec] = useState({
     disease: "",
     flavors: "",
     effects: ""
  });

  const [message, setMessage] = useState({ error: "", success: "" });

  // // const submitForm = event => {
  // //   console.log("clicked")
  // //   event.preventDefault();
  // //   props.addRec({ ...rec, id: props.user.id });
  // //   setMessage({ error: props.error, success: props.success });
  // //   setRec({ disease: "", flavors: "", effects: "" });
  // // };

  // console.log(message);

  return (
    <>
      <div className="container">
      <Nav />
        <div className="row">
          <CheckboxList />
          
        </div>
      </div>
    </>
  );
};



export default UserForm;
