import React from "react";




function PredCard(props) {

  
  return (
    <div className="character-card">
      <div>
       

        <div>
          <div> ID: {props.pred.id}</div>
          <div> Strains: {props.pred.strain}</div>
          <div> Info: {props.pred.info}</div>
        </div>
      </div>
    </div>
  );
}

export default PredCard;