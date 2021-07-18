import React from  'react';
import ImageCard from './ImageCard';
import '../../styles/CardContainer.css';

function CardContainer(props) {

    const importAllImages = r => r.keys().map(r);
    const images = importAllImages(require.context('../../images', false, /\.(png|jpe?g|svg)/));

    const imagesList = images.map(image => {
        const indStart = image.default.lastIndexOf('/') + 1;
        const indEnd = image.default.indexOf('.');
        const charName = image.default.substring(indStart, indEnd);

        return (<ImageCard src={image.default} alt={charName} key={charName} />);
    })

    return (
        <div className="card-container">
            {imagesList}
        </div>
    )
}

export default CardContainer;