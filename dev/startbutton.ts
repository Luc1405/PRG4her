import { Game } from "./game.js"
import { GameObject } from "./gameobject.js"

export class StartButton extends GameObject {

    private game:Game

    constructor(g:Game) {
        super("startbutton")
        this.game = g
        this.element.innerHTML = "START"
        this.element.addEventListener("click", ()=>this.startGame())
    }

    private startGame(){
        this.game.startGame()
        this.element.remove()
    }
}