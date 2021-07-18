import React from 'react';
import '../../styles/ImageCard.css'

function ImageCard(props) {
    const { src, alt} = props;

    return (
        <div className="container">
            <img className="img-size" src={src} alt={alt} />
            <br />
            <span>{alt}</span>
        </div>
    );
}

export default ImageCard;