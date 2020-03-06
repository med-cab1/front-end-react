import React, { useEffect } from "react";

import { connect } from 'react-redux'
import RecCard from "./RecCard"
import PredCard from "./PredCard"

import { fetchCanabisRecommendations, fetchCanabisPrediction } from "../../actions";

const UserDashboard = props => {

  useEffect(() => {
    props.fetchCanabisRecommendations(`/api/users/cannabis/${props.user.id}/recommendations`);
    props.fetchCanabisPrediction(`/api/users/cannabis/prediction`)
  }, [],[]);

  
  return (
    <>
      
      <div>
       


        <h3> Your Saved Recommendations: </h3>

        {props.user.recommendations && props.user.recommendations.map(rec => { 
          return <RecCard key={rec.id} rec={rec}/>
        })}

        Your Preferred List:

  {props.user.prediction && props.user.prediction.map(pred => { 
          return <PredCard key={pred.id} rec={pred}/>
        })}
       

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