import { connect } from "react-redux"
import { Component } from "react"

// import "./Information.css"

class Information extends Component {
  render() {
    const { currentPlayer, isGameEnded, isDraw, winCounter } = this.props

    return (
      <div className="mb-[60px]">
        <div className="text-[22px] mb-[20px]">
          <p className="m-0">
            Счет: <span className="x">{winCounter[0]} </span> :{" "}
            <span className="o">{winCounter[1]} </span>
          </p>
        </div>
        {!isGameEnded && (
          <div className="text-[32px]">
            Ходит:{" "}
            <span className={`${currentPlayer.toLowerCase()}`}>
              {currentPlayer}
            </span>
          </div>
        )}

        {isGameEnded && (
          <div className="text-[32px]">
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
}

const mapStateToProps = (state) => ({
  currentPlayer: state.game.currentPlayer,
  isGameEnded: state.game.isGameEnded,
  isDraw: state.game.isDraw,
  winCounter: state.game.winCounter,
})

export default connect(mapStateToProps)(Information)
