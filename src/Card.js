import React from 'react';

const Card = (props) => {
    return (
        <div className="tc bg-light-green dib grow br3 pa3 ma2 bw2 shadow-5" >
            <img alt="a pic of a fat cat" src={`https://robohash.org/${props.id}?200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;