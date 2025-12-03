import { useSelector } from "react-redux"

import "./Information.css"

export function Information() {
  const { currentPlayer, isGameEnded, isDraw, winCounter } = useSelector(
    (state) => state.game
  )

  return (
    <div className="information">
      <div className="information_win-counter">
        <p>
          Счет: <span className="x">{winCounter[0]} </span> :{" "}
          <span className="o">{winCounter[1]} </span>
        </p>
      </div>

      {!isGameEnded && (
        <div className="information_game-status">
          Ходит:{" "}
          <span className={`${currentPlayer.toLowerCase()}`}>
            {currentPlayer}
          </span>
        </div>
      )}

      {isGameEnded && (
        <div className="information_game-status">
          Игра окончена!{" "}
          {!isDraw ? (
            <p className={`${currentPlayer.toLowerCase()}`}>
              Победа: {currentPlayer}
            </p>
          ) : (
            <p>Ничья</p>
          )}
        </div>
      )}
    </div>
  )
}
