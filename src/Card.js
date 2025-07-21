import React from "react";


const Card = ({name, email, id}) => {
    return (
        <div className="tc bg-light-green dib br3 pa2 ma2 grow bw3 shadow-5 mw5">
            <img alt="Robots" src={`https://robohash.org/${id}?100x100`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
      </div>   
    );
}
export default Card