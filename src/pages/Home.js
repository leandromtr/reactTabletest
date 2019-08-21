import React, { Fragment, useContext } from "react";
import Context from "../UserContext";

export default () => {
  const { acesso, setAcesso } = useContext(Context)

  return (
    <Fragment>
      <center>
      <h1>{acesso}</h1>
      <button onClick={() => setAcesso("normal-user")}>Normal</button>
      <button onClick={() => setAcesso("Admin")}>Admin</button>
      <br/>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img  src={require('../images/placeholder-logo.png')} style={{backgroundColor: "#fff"}} alt="logo" />        
      </div> 

      <h1>Gestão da Frota</h1>
      {/* <p>Select the book written by the author shown</p> */}
      </center>
    </Fragment>
  );
};

