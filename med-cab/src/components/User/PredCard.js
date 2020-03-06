import React from "react";





function PredCard(props) {

  
  return (
    <div className="pred-card">
      <div>
       

        <div>
        
          <div> Strains: {props.userPrediction.strains}</div>
          <div> Info: {props.userPrediction.info}</div>
        </div>
      </div>
    </div>
  );
}

export default PredCard;