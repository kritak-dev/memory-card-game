import React, { useState, useEffect } from 'react';
import CardContainer from '../components/gameboard/CardContainer'
import Header from '../components/header/Header';
import '../styles/global.css';

function Game(props) {
    const [images, setImages] = useState([]);
    const [clickedImages, setClickedImages] = useState([]);

    const getShuffledImages = images => {
        const shuffledImages = [...images];
        for (let i = shuffledImages.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = shuffledImages[i];
            shuffledImages[i] = shuffledImages[j];
            shuffledImages[j] = temp;
        }
        setImages(shuffledImages);
    };

    useEffect(() => {
        const importAllImages = r => r.keys().map(r);
        const importedImages = importAllImages(require.context('../images', false, /\.(png|jpe?g|svg)/));
        setImages(importedImages);
        document.title = 'Memory Card Game';
        return importedImages;
    }, []);

    const handleImageClick = (id) => {
        getShuffledImages(images);
        if (clickedImages.some(imageId => imageId === id)) {
            setClickedImages([]);
            return;
        }
        setClickedImages(clickedImages => {
            return [...clickedImages, id];
        });
    };

    return (
        <div>
        <Header clickedImages={clickedImages} />
        <CardContainer images={images} handleImageClick={handleImageClick} />
        </div>
    )
}

export default Game;