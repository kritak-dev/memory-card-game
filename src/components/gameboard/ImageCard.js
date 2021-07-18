import React from 'react';

function ImageCard(props) {
    const { src, alt} = props;

    return (
        <div className="card">
            <img src={src} alt={alt} />
            <br />
            <span>{alt}</span>
        </div>
    );
}

export default ImageCard;