import { gameReducer } from "./reducer"
import { createStore, combineReducers } from "redux"

const reducer = combineReducers({
  game: gameReducer,
})

export const store = createStore(reducer)
