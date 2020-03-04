import React, { useEffect } from "react";

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import RecCard from "./RecCard"

import { fetchCanabisRecommendations } from "../../actions";

const UserDashboard = props => {

  useEffect(() => {
    props.fetchCanabisRecommendations('/predictions');
  }, []);

  
  return (
    <>
      
      <div>
       


        <h3> Your Recommendations: </h3>

       

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