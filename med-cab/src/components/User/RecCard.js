import React from "react";
import styled from "styled-components";


const RecCards = styled.header`
background-color: #fff;
  overflow: hidden;
  padding: 1.3rem;
  border-style: solid;
  position: relative;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

function RecCard(props) {
  return (
    <RecCards>
      <div>
        
        <div> Strains: {props.userRecommendation}</div>
        <div> Info: {props.userRecommendation}</div>
      </div>
    </RecCards>
  );
}

export default RecCard;
