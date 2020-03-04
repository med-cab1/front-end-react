import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { connect } from "react-redux";
import { addRec } from "../../actions";

const conditions = [
  "Cancer - Pain",
  "Cancer - Nausea",
  "Cancer - Wasting",
  "Glaucoma",
  "HIV/AIDS",
  "Seizures",
  "Muscle Spasms",
  "Autism",
  "Sleep Apnia",
  "Tourette Syndrome",
  "ALS",
  "IBS",
  "Intractable Pain",
  "PSD"
];

const flavors = [
  "Earthy",
  "Sweet",
  "Citrus",
  "Flowery",
  "Violet",
  "Diesel",
  "Spicy/Herbal",
  "Sage",
  "Woody",
  "Apricot",
  "Grapefruit",
  "Orange",
  "None",
  "Pungent",
  "Grape",
  "Pine",
  "Skunk",
  "Berry",
  "Pepper",
  "Menthol",
  "Blue",
  "Cheese",
  "Chemical",
  "Mango",
  "Lemon",
  "Peach",
  "Vanilla",
  "Nutty",
  "Chestnut",
  "Tea",
  "Tobacco",
  "Tropical",
  "Strawberry",
  "Blueberry",
  "Mint",
  "Apple",
  "Honey",
  "Lavender",
  "Lime",
  "Coffee",
  "Ammonia",
  "Minty",
  "Tree",
  "Fruit",
  "Butter",
  "Pineapple",
  "Tar",
  "Rose",
  "Plum",
  "Pear"
];

const effects = [
  "Creative",
  "Energetic",
  "Tingly",
  "Euphoric",
  "Relaxed",
  "Aroused",
  "Happy",
  "Uplifted",
  "Hungry",
  "Talkative",
  "None",
  "Giggly",
  "Focused",
  "Sleepy",
  "Dry Mouth"
];

const CheckboxList = props=> {
  const [rec, setRec] = useState({
    disease: "",
    flavors: "",
    effects: "",
    selectedCheckboxes: []

  });
  const [message, setMessage] = useState({ error: "", success: "" });

 const toggleCheckbox = label => {
    if (rec.selectedCheckboxes.includes(label)) {
      setRec({
        ...rec,
        selectedCheckboxes: rec.selectedCheckboxes.filter(
          item => item !== label
        )
      });
    } else {
      setRec({
        ...rec,
        selectedCheckboxes: [...rec.selectedCheckboxes, label]
      });
    }
  };

  const submitForm = event => {
    event.preventDefault();

    for (const checkbox of rec.selectedCheckboxes) {
      console.log(checkbox, "is selected.");

    props.addRec({ ...rec, id: props.user.id });
    setMessage({ error: props.error, success: props.success });
    setRec({ disease: "", flavors: "", effects: "" });
  };

  console.log(message);

    
  };

 const createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={toggleCheckbox}
      disabled={
        rec.selectedCheckboxes.length >= 9 &&
        !rec.selectedCheckboxes.includes(label)
          ? "disabled"
          : ""
      }
      key={label}
    />
  );

  const createCheckboxes = () => flavors.map(createCheckbox);
  const createCheckboxesv2 = () => effects.map(createCheckbox);
  const createCheckboxesv3 = () => conditions.map(createCheckbox);

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3> Current Condition (Pick 1 max): </h3>
            <form onSubmit={submitForm}>
            {createCheckboxesv3()}
            <h3> Desired Flavors (Pick 3 max): </h3>
            <form onSubmit={submitForm}>
            {createCheckboxes()}
            <h3>Desired Effects(pick 5 max) </h3> 
            <form onSubmit={submitForm}>
            {createCheckboxesv2()}
            <button
            className="btn btn-default"
            type="submit"
          >
            Submit
          </button>
          </form>
          </form>
          </form>
          </div>
        </div>
      </div>
    );
  }


const mapStateToProps = state => {
  return {
    user: state.user,
    success: state.success,
    error: state.error
  };
};

export default connect(mapStateToProps, { addRec })(CheckboxList);

