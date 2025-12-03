import { connect } from "react-redux"

import "./Information.css"

export function Information({
  currentPlayer,
  isGameEnded,
  isDraw,
  winCounter,
}) {
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

// получаем данные из стора
const mapStateToProps = (state) => ({
  currentPlayer: state.game.currentPlayer,
  isGameEnded: state.game.isGameEnded,
  isDraw: state.game.isDraw,
  winCounter: state.game.winCounter,
})

export default connect(mapStateToProps)(Information)
