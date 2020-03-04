import React from "react";




function RecCard(props) {

  
  return (
    <div className="character-card">
      <div>
       

        <div>
          <div> ID: {props.rec.id}</div>
          <div> Strains: {props.rec.strains}</div>
          <div> Info: {props.rec.info}</div>
        </div>
      </div>
    </div>
  );
}

export default RecCard;