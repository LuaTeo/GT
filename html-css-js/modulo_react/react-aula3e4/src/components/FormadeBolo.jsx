import React from "react";

const FormadeBolo = ({sabor, cobertura}) => {
    return ( <div> <h1>Bolo de {sabor} com cobertura de {cobertura}</h1> </div> );
};

/*
const FormadeBolo = (props) => {
    return ( <div> <h1>Bolo de {props.sabor} com cobertura de {props.cobertura}</h1> </div> );
};
*/
 
export default FormadeBolo;