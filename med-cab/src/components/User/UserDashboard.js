import React, { useEffect } from "react";
import history from "../history";
import { connect } from "react-redux";
import RecCard from "./RecCard";
import PredCard from "./PredCard";
import styled from "styled-components";
import { fetchCanabisRecommendations } from "../../actions";
import Nav from "../Nav";

const Container = styled.div`
  text-align: center;
`;

const SmallContainer = styled.div `
 margin: 5px auto;
 padding: 20px;


`;

const ButtonDash = styled.button`
  background-color: #4caf50;
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
const MyH3 = styled.h3`
  position: relative;
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: #659b6e;
  text-decoration: underline;
`;

const UserDashboard = props => {
  useEffect(() => {
    props.fetchCanabisRecommendations(
      `/api/users/cannabis/${props.user.id}/recommendations`
    );
  }, []);

  const handleSubmit = e => {
    history.push("/user/userform");
  };

  return (
    <>
      <Container>
        <Nav />
        <SmallContainer>

        <MyH3>
          {" "}
          Hello ! {props.user.username} ! Here are your Saved Recommendations:{" "}
        </MyH3>

        <span></span>
        <p>Need to Save a recommendations first!</p>
        <span></span>
        <p> ____________</p>
        </SmallContainer>

        <SmallContainer>
      
        <MyH3> {props.user.username}'s Recommended List:</MyH3>

        <PredCard userPrediction={props.user.prediction} />
       </SmallContainer>

        <ButtonDash> Add Strains to your Saved Prediction </ButtonDash>

        <ButtonDash onClick={handleSubmit}>
          Edit Form for New Recommendation
        </ButtonDash>
      </Container>
      >
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { fetchCanabisRecommendations })(
  UserDashboard
);
