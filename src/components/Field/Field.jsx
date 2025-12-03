import { useDispatch, useSelector } from "react-redux"

import { playerStep, RESTART_GAME } from "../../action"
import "./Field.css"

export function Field() {
  const dispatch = useDispatch()
  const field = useSelector((state) => state.game.field)
  const isGameEnded = useSelector((state) => state.game.isGameEnded)

  // хода игрока
  function stepPlayers(id) {
    if (field[id]) return

    dispatch(playerStep(id))
  }

  // сбрасываем значения состония
  function gameOver() {
    dispatch(RESTART_GAME)
  }

  return (
    <div className="field">
      {!isGameEnded && (
        <ul className="field_list">
          {field.map((item, index) => (
            <li key={index} onClick={() => stepPlayers(index)}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {isGameEnded && (
        <div className="field_restart-game">
          <button className="restart-game" onClick={() => gameOver()}>
            Начать заново
          </button>
        </div>
      )}
    </div>
  )
}
