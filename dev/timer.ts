//importing classes 
import { Game } from "./Game.js"

//exporting the class
export class Timer {

    private timeBar: HTMLElement
    private game: Game
    private _timer: number = 1800
    public get timer(): number {
        return this._timer       
    }

    constructor(g: Game) {
        this.game = g
        const game = document.querySelector('game') as HTMLElement
        this.timeBar = document.createElement("timer")
        game.appendChild(this.timeBar)
    }

    //function to update the timebar
    public update() {
        if (this._timer > 0) {
            this._timer--
        }
        //turns the number in to actual seconds 
        let secondsLeft = Math.floor(this._timer / 60)
        // forms the text of the timer 
        let timerText = "Seconds left:" + secondsLeft

        //implements the text in the Div
        this.timeBar.innerHTML = timerText
        console.log(this._timer)
    }
    //function to remove the timebar 
    public remove() {
        this.timeBar.remove()
    }

}