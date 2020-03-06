import React, { useEffect } from "react";
import history from "../history"
import { connect } from 'react-redux'
import RecCard from "./RecCard"
import PredCard from "./PredCard"

import { fetchCanabisRecommendations, fetchCanabisPrediction } from "../../actions";

const UserDashboard = props => {

  useEffect(() => {
    props.fetchCanabisRecommendations(`/api/users/cannabis/${props.user.id}/recommendations`);
  
  }, []);

 const  handleSubmit = e => {
    history.push ("/user/userform");

  }

  
  return (
    <>
      
      <div>
       


        <h3> Your Saved Recommendations: </h3>

        {props.user.recommendations && props.user.recommendations.map(rec => { 
          return <RecCard key={rec.id} rec={rec}/>
        })}

       <h3> Your Recommended List:</h3>

      <PredCard userPrediction = {props.user.prediction}/>
      <button> Update your Saved Prediction </button>



      <button onClick={handleSubmit}>Edit Form for New Recommendation</button>
       
       

      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoading: state.isLoading
  }
}

export default connect(
  mapStateToProps,
  {fetchCanabisRecommendations}
)(UserDashboard)