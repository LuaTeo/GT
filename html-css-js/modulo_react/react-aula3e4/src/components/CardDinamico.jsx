import React from "react";

const CardDinamico = ({ children }) => { 
    return ( <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}> {children} </div> ); 
}; 

export default CardDinamico;