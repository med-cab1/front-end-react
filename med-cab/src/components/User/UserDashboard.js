import React, { useEffect } from "react";

import { connect } from 'react-redux'
import RecCard from "./RecCard"
import PredCard from "./PredCard"

import { fetchCanabisRecommendations, fetchCanabisPrediction } from "../../actions";

const UserDashboard = props => {

  useEffect(() => {
    props.fetchCanabisRecommendations(`/api/users/cannabis/${props.user.id}/recommendations`);
    props.fetchCanabisPrediction(`/api/users/cannabis/prediction`)
  }, []);

  
  return (
    <>
      
      <div>
       


        <h3> Your Saved Recommendations: </h3>

        {props.user.recommendations && props.user.recommendations.map(rec => { 
          return <RecCard key={rec.id} rec={rec}/>
        })}

       <h3> Your Recommended List:</h3>

      <PredCard userPrediction = {props.user.prediction}/>
       
       

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
  {fetchCanabisRecommendations, fetchCanabisPrediction}
)(UserDashboard)