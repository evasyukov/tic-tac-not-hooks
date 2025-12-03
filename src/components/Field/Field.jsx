import { connect } from "react-redux"
import { playerStep, RESTART_GAME } from "../../action"

import "./Field.css"

export function Field({ field, isGameEnded, playerStep, onRestart }) {
  
  // хода игрока
  function stepPlayers(id) {
    if (field[id]) return

    playerStep(id)
  }

  return (
    <div className="field">
      {!isGameEnded ? (
         <ul className="field_list">
          {field.map((item, index) => (
            <li key={index} onClick={() => stepPlayers(index)}>
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
