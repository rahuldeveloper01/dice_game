import React, { useState } from "react";
import Index from "../Index";
import PageIndex from "../PageIndex";
import PNG from "../../assests/Png";
const StartGame = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const [score, setScore] = PageIndex.useState(0);
  const [currentdice, setCurrentDice] = PageIndex.useState(1);
  const [selectnumber, setSelectNumber] = PageIndex.useState();
  const [showrules, setShowRules] = PageIndex.useState(false);
  const genrateNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
  };

  const roleDice = () => {
    const role = genrateNumber(1, 7);

    setCurrentDice(role);

    if (selectnumber == role) {
      setScore((pre) => pre + role);
    } else {
      setScore((pre) => pre - 2);
    }
  };
  const ResetDice = () => {
    setScore(0);
  };

  return (
    <>
      <Index.Box className="start-game-main">
        <Index.Box>
          <Index.Typography variant="h3">Score:{score}</Index.Typography>
        </Index.Box>
        <Index.Box className="start-game-items">
          {arr?.map((ele) => {
            return (
              <>
                <Index.Box>
                 
                  <Index.Button
                    variant="p"
                    className="dice-element"
                    onClick={() => {
                      setSelectNumber(ele);
                    }}
                  >
                    {ele}
                  </Index.Button>
                </Index.Box>
              </>
            );
          })}
        </Index.Box>
      </Index.Box>

      <Index.Box className="dice-image-box" onClick={roleDice}>
        <Index.Box>
          <img
            src={PNG[`dice${currentdice}`]}
            className="dice-image"
            alt="dice"
          />
        </Index.Box>
      </Index.Box>
      <Index.Box className="dice-button-box">
        <Index.Button className="reset-button" onClick={() => ResetDice()}>
          Reset Score
        </Index.Button>
        {showrules ? (
          <>
            <Index.Button
              className={showrules ? "active" : "deactive"}
              onClick={() => setShowRules(!showrules)}
            >
              Show Rules
            </Index.Button>
          </>
        ) : (
          <Index.Button
            className={showrules ? "deactive" : "active"}
            onClick={() => setShowRules(!showrules)}
          >
            Hide Rules
          </Index.Button>
        )}

        <Index.Box>
          {showrules ? (
            <>
              <Index.Box>
                <Index.Typography className="heading-rules" variant="h3">
                  How to play?
                </Index.Typography>

                <ul>
                  <li className="list-item">Select any number.</li>
                  <li className="list-item">Click on the dice image.</li>
                  <li className="list-item">
                    After clicking on the dice, if the selected number is equal
                    to the dice number, you will get the same point as the dice.
                  </li>
                  <li className="list-item">
                    If you guess wrong, then 2 points will be deducted.
                  </li>
                </ul>
              </Index.Box>
            </>
          ) : (
            ""
          )}
        </Index.Box>
      </Index.Box>
    </>
  );
};

export default StartGame;
