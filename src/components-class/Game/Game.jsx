import { Information, Field } from "../../components-class"
import { Component } from "react"

// import "./Game.css"

export default class Game extends Component {
  render() {
    return (
      <div className="mx-[auto] my-[0] p-8 text-center flex flex-col items-center">
        <Information />
        <Field />
      </div>
    )
  }
}
