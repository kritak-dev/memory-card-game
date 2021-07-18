import React from 'react';

function Header(props) {
    return(
        <div className="header">
            <header>
                <h1 className="mb-10 fs-40">Family Guy Memory Game</h1>
                <p className="fs-30">Get points for clicking on an image but don't click on any image more than once.</p>
            </header>
            <div className="scorecard">
                <span>Score: 0</span>
                <span>High Score: 0</span>
            </div>
        </div>
    )
}

export default Header;