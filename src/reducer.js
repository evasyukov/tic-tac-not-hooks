import { isWinner, isDraw } from "./utils.js"

const initialState = {
  currentPlayer: "X", // состояние очереда хода
  isGameEnded: false, // состояние игры (завершена или нет)
  isDraw: false, // состояние ничьи
  field: ["", "", "", "", "", "", "", "", ""], // состояние поля
  winCounter: [0, 0], // счетчик побед - Х:О
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    // ход игрока
    case "PLAYER_STEP": {
      const { index } = action.payload
      if (state.field[index] || state.isGameEnded) return state

      const newField = [...state.field]
      newField[index] = state.currentPlayer

      const winner = isWinner(newField)
      const draw = isDraw(newField)

      // проверка на победу
      if (winner) {
        return {
          ...state,
          field: newField,
          isGameEnded: true,
          winCounter:
            state.currentPlayer === "X"
              ? [state.winCounter[0] + 1, state.winCounter[1]]
              : [state.winCounter[0], state.winCounter[1] + 1],
          currentPlayer: winner,
        }
      }

      // проверка на ничью
      if (draw) {
        return {
          ...state,
          field: newField,
          isGameEnded: true,
          isDraw: true,
        }
      }

      // продолжаем игру
      return {
        ...state,
        field: newField,
        currentPlayer: state.currentPlayer === "X" ? "O" : "X",
      }
    }

    // обнуление игры
    case "RESTART_GAME": {
      return {
        ...initialState,
        winCounter: state.winCounter, // сохраняем счётчик побед
      }
    }

    default:
      return state
  }
}
