import { connect } from "react-redux"
import { Component } from "react"

import { playerStep, RESTART_GAME } from "../../action"

import "./Field.css"

class Field extends Component {
  // ход игрока
  stepPlayers(id) {
    const { field, playerStep } = this.props

    if (field[id]) return

    playerStep(id)
  }

  render() {
    const { isGameEnded, field, onRestart } = this.props

    return (
      <div className="field">
        {!isGameEnded ? (
          <ul className="field_list">
            {field.map((item, index) => (
              <li key={index} onClick={() => this.stepPlayers(index)}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div className="field_restart-game">
            <button className="restart-game" onClick={onRestart}>
              Начать заново
            </button>
          </div>
        )}
      </div>
    )
  }
}

// получаем данные из стора
const mapStateToProps = (state) => ({
  field: state.game.field,
  isGameEnded: state.game.isGameEnded,
})

// отправляем данные в стор
const mapDispatchToProps = (dispatch) => ({
  playerStep: (index) => dispatch(playerStep(index)),
  onRestart: () => dispatch(RESTART_GAME),
})

export default connect(mapStateToProps, mapDispatchToProps)(Field)
