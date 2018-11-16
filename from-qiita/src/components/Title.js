import React from 'react';  //Reactを使うときのおまじない

const Title = (props) => {

    return(
      <div className="titleSection">
  
        <h2
          style={props.titleStyle}
          id="versionStatement"
        >{props.title}</h2>
  
        <p
          onClick={props.onClick}
          id="upgradeButton"
        >Upgrade</p>
  
      </div>
    )
  }

export default Title;