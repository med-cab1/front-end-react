import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
//removing the state - can let formik do it
//will also remove onSubmit + onChange
const UserForm = ({ values, handleChange, errors, touched }) => {
  return (
    <div className="user-form">
      <Form>
        <label htmlFor="user">
          Dashboard:
          <Field id="user" type="text" name="user" />
          {touched.user && errors.user && (
            <p className="errors"> {errors.user} </p>
          )}
        </label>
        <label htmlFor="size">
          <Field id="size" type="text" name="size" />
          {touched.size && errors.size && (
            <p className="errors"> {errors.size} </p>
          )}
        </label>
        <Field className="strain-select" as="select" name="strains">
          <option disabled>Choose an option</option>
          <option value="Omnivore">Sativa</option>
          <option value="Herbivore">Hybryd</option>
          <option value="Carnivore">Indica</option>
        </Field>
        <label htmlFor="User" className="checkbox-container">
          User
          <Field
            id="user"
            type="checkbox"
            name="user"
            check={values.user}
          />
          <span className="checkmark" />
        </label>
        <Field as="textarea" type="text" name="notes" placeholder="Notes" />
        <button type="submit">Submit!</button>
      </Form>
    </div>
  );
};
const FormikUserForm = withFormik({
  //mapPropsToValues initilizes your form's empty state
  //is a part of the FormikBag and withFormik
  //using this, we can now pass some props to set initial states on our Form
  //important to note: we cannot update our value without handleChange when using <input>
  //so if we go into index and give our AnimalForm a species="tiger", it will stay static
  mapPropsToValues({ user, strain, effects}) {
    return {
      user: user || "",
      strain: strain || "",
      effects: effects || false,
      notes: ""
      //These || means that if species is pre-defined, use that value
      //If it is empty, leave an empty string instead (or whatever you choose)
    };
  },
  validationSchema: Yup.object().shape({
    species: Yup.string().required("user Name is required!"),
    size: Yup.string().required()
  }),
  handleSubmit(values, formikBag) {
    console.log("submitting", values);
    axios
      .post("https://regres.in/api/users/")
      .then(response => {
        console.log("success", response);
      })
      .catch(error => console.log(error.response));
  }

  //handleSubmit takes all the data/strings we're entering into the forms and
  //turns them into an object - as seen by the console.log
})(UserForm);
export default FormikUserForm;
