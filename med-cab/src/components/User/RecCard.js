import React from "react";




function RecCard(props) {

  
  return (
    <div className="character-card">
      <div>
       

        <div className="reccard">
          <div> ID: {props.rec.id}</div>
          <div> Strains: {props.rec.strain}</div>
          <div> Info: {props.rec.info}</div>
        </div>
      </div>
    </div>
  );
}

export default RecCard;