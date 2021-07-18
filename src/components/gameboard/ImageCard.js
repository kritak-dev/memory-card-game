import React from 'react';

function ImageCard(props) {
    const { src, alt, id, handleClick } = props;

    const handleImageClick = () => handleClick(id);

    return (
        <div className="card">
            <img src={src} alt={alt} id={id} onClick={handleImageClick} />
            <br />
            <span>{alt}</span>
        </div>
    );
}

export default ImageCard;