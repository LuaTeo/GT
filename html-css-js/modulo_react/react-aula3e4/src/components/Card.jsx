import React from "react";

const Card = ({ title, category, content, image }) => {
    return ( <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}> {image && <img src={image} alt={title} style={{ width: '100px' }} />} <h2>{title}</h2> <h6>{category}</h6> <p>{content}</p> </div> );
};
 
export default Card;