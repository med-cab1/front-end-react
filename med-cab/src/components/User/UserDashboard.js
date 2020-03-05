import React, { useEffect } from "react";

import { connect } from 'react-redux'
import RecCard from "./RecCard"

import { fetchCanabisRecommendations } from "../../actions";

const UserDashboard = props => {

  useEffect(() => {
    props.fetchCanabisRecommendations('/api/users/cannabis/1/recommendations');
  }, []);

  
  return (
    <>
      
      <div>
       


        <h3> Your Recommendations: </h3>

        {props.user.recommendations && props.user.recommendations.map(rec => { 
          return <RecCard key={rec.id} rec={rec}/>
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
  {fetchCanabisRecommendations}
)(UserDashboard)