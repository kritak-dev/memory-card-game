import React, { useEffect, useState } from 'react';

function Header(props) {
    const { clickedImages } = props;
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        setScore(clickedImages.length);
        setHighScore(highScore => {
            if (score > highScore)
                return score;
            else return highScore;
        });
    }, [clickedImages, score]);

    return(
        <div className="header">
            <header>
                <h1 className="mb-10 fs-40">Family Guy Memory Game</h1>
                <p className="fs-30">Get points for clicking on an image but don't click on any image more than once.</p>
            </header>
            <div className="scorecard">
                <span>Score: {score}</span>
                <span>High Score: {highScore}</span>
            </div>
        </div>
    )
}

export default Header;