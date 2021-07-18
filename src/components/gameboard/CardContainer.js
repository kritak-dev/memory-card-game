import React from  'react';
import ImageCard from './ImageCard';

function CardContainer(props) {
    const { images, handleImageClick } = props;

    const handleClick = (id) => handleImageClick(id);

    const imagesList = images.map(image => {
        const indStart = image.default.lastIndexOf('/') + 1;
        const indEnd = image.default.indexOf('.');
        const charName = image.default.substring(indStart, indEnd);

        return (<ImageCard src={image.default} alt={charName} key={charName} id={charName} handleClick={handleClick} />);
    });

    return (
        <div className="card-container">
            {imagesList}
        </div>
    )
}

export default CardContainer;