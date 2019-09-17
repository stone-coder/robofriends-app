import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className="tc bg-light-green dib grow br3 pa3 ma2 bw2 shadow-5" >
            <img alt="a pic of a fat cat" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;