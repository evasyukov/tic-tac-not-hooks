import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"

import { store } from "./store"

import "./index.css"
import Game from "./components-class/Game/Game"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Game />
  </Provider>
)
