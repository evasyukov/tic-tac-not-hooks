import { Information, Field } from "../../components-class"
import { Component } from "react"

import "./Game.css"

export default class Game extends Component {
  render() {
    return (
      <div className="game">
        <Information />
        <Field />
      </div>
    )
  }
}
