import React from "react";
import styled from "styled-components";


const PredCards = styled.header`
background-color: #fff;
  overflow: hidden;
  padding: 1.3rem;
  position: relative;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  `;

function PredCard(props) {
  return (
    <PredCards>
      <div>
        <div>
          <div> Strains: {props.userPrediction.strains}</div>
          <div> Info: {props.userPrediction.info}</div>
        </div>
      </div>
    </PredCards>
  );
}

export default PredCard;
