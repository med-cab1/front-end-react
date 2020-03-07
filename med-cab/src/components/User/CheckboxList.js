import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { connect } from "react-redux";
import { addRec } from "../../actions";
import styled from "styled-components";

const MyH3 = styled.h3`
position: relative;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #659b6e;
  text-decoration: underline;
`;
const ButtonForm = styled.button`
background-color: #4CAF50;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
`;
const Container = styled.div`
text-align: center;

`;

const disease = [
  "Cancer-Pain",
  "Cancer-Nausea",
  "Cancer-Wasting",
  "Glaucoma",
  "HIV/AIDS",
  "Seizures",
  "Muscle Spasms",
  "Autism",
  "Sleep_Apnia",
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

const CheckboxList = props => {
  const [rec, setRec] = useState({
    
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
    
    props.addRec({ ...rec, id: props.user.id });
    console.log(rec);
    setMessage({ error: props.error, success: props.success });
    setRec({ selectedCheckboxes:[] });

    console.log(rec.selectedCheckboxes, "is selected.");

    console.log(message);
  };

  const createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={toggleCheckbox}
      key={label}
    />
  );

  const createCheckboxes = () => flavors.map(createCheckbox);
  const createCheckboxesv2 = () => effects.map(createCheckbox);
  const createCheckboxesv3 = () => disease.map(createCheckbox);

  return (
    <Container>
      <div className="row">
        <div className="col-sm-12">
          <form onSubmit={submitForm}>
            <MyH3> Current Disease (Pick 1 only): </MyH3>

            {createCheckboxesv3()}
            <MyH3> Desired Flavors (Pick 3 only): </MyH3>

            {createCheckboxes()}
            <MyH3>Desired Effects(pick 5 only) </MyH3>

            {createCheckboxesv2()}
            <ButtonForm  className="btn btn-default" type="submit">
              Submit
            </ButtonForm >
          </form>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    success: state.success,
    error: state.error
  };
};

export default connect(mapStateToProps, { addRec })(CheckboxList);
