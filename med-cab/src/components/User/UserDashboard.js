import React, { useEffect } from "react";

import { connect } from 'react-redux'
import RecCard from "./RecCard"

import { fetchCanabisRecommendations } from "../../actions";

const UserDashboard = props => {

  useEffect(() => {
    props.fetchCanabisRecommendations('/api/users/cannabis/:id/recommendations');
  }, []);

  
  return (
    <>
      
      <div>
       


        <h3> Your Recommendations: </h3>

        {props.user.recs && props.user.recs.map(rec => { 
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