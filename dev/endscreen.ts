import { GameObject } from "./gameobject.js"
import { Game } from "./game.js"

export class EndScreen extends GameObject {

    private game : Game

    constructor(game: Game) {

        super("endscreen")
        this.game = game
        const text = document.createElement("div")
        const btn = document.createElement("button")

        this.element.appendChild(text)
        this.element.appendChild(btn)

        text.innerText = "Game Over"
        btn.innerText = "Return to Start"

        btn.addEventListener("click", () => this.toStartScreen())
    }

    private toStartScreen() {
        window.location.reload()
        this.remove()
       }
}