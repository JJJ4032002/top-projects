import {useState} from "react";

function Header({currentScore, bestScore}) {

    return (
        <div className={'Header'}>
            <h2>Marvel Galaxy Heroes</h2>
            <ul>
                <li>Current score: {currentScore}</li>
                <li>Best score🎯: {bestScore}</li>
                <li>Lyton's best score: 14</li>
            </ul>
        </div>
    );
}

export default Header;