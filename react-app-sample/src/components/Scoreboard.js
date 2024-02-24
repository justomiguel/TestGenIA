import React, { useState } from 'react';

const Scoreboard = () => {
    const [myScore, setMyScore] = useState(0);
    const [yourScore, setYourScore] = useState(0);
    const [myWins, setMyWins] = useState(0);
    const [yourWins, setYourWins] = useState(0);

    const resetScores = () => {
        setMyScore(0);
        setYourScore(0);
    };

    const incrementMyScore = () => setMyScore(myScore + 1);
    const decrementMyScore = () => setMyScore(myScore - 1);
    const incrementYourScore = () => setYourScore(yourScore + 1);
    const decrementYourScore = () => setYourScore(yourScore - 1);

    const handleWin = (player) => {
        if (player === 'me') {
            setMyWins(myWins + 1);
            resetScores();
        } else if (player === 'you') {
            setYourWins(yourWins + 1);
            resetScores();
        }
    };

    return (
        <div style={{ backgroundColor: '#008000', color: 'white', padding: '20px', fontFamily: 'Arial' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={resetScores}>RESET</button>
                <h1>Contador</h1>
                <div></div> {/* Placeholder for layout */}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <div style={{ margin: '0 20px' }}>
                    <button onClick={incrementMyScore}>+</button>
                    <h2>{myScore}</h2>
                    <button onClick={decrementMyScore}>-</button>
                    <p>Victorias: {myWins}</p>
                    <button onClick={() => handleWin('me')}>Truco</button>
                    <button onClick={() => handleWin('me')}>Retruco</button>
                </div>
                <h2 style={{ alignSelf: 'center' }}>Vs</h2>
                <div style={{ margin: '0 20px' }}>
                    <button onClick={incrementYourScore}>+</button>
                    <h2>{yourScore}</h2>
                    <button onClick={decrementYourScore}>-</button>
                    <p>Victorias: {yourWins}</p>
                    <button onClick={() => handleWin('you')}>Retruco</button>
                    <button onClick={() => handleWin('you')}>Truco</button>
                </div>
            </div>
        </div>
    );
};

export default Scoreboard;
