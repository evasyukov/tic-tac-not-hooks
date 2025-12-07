import { connect } from "react-redux"
import { Component } from "react"

import { playerStep, RESTART_GAME } from "../../action"

// import "./Field.css"

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
      <div className="select-none">
        {!isGameEnded ? (
          <ul className="grid grid-cols-[repeat(3,_80px)] grid-rows-[repeat(3,_80px)] [list-style:none] p-0 m-0">
            {field.map((item, index) => (
              <li
                className="border-[1px] border-solid border-[#a1a1a1] flex items-center justify-center 
                text-[2em] hover:bg-[#474747]"
                key={index}
                onClick={() => this.stepPlayers(index)}
              >
                <p className={`${item.toLowerCase()}`}>{item}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <button
              className="text-[28px] p-[15px] bg-transparent border-[1px] border-solid border-[#fff] 
              rounded-[12px] cursor-pointer hover:bg-[#666]"
              onClick={onRestart}
            >
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
