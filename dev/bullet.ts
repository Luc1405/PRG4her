import { Game } from "./game.js";
import { GameObject } from "./gameobject.js"
import { Player } from "./player.js";

export class Bullet extends GameObject {

    private game:Game

    constructor(player:Player, g:Game) {
        super("bullet")
        //let sound = new Audio("./sound/laser.mp3")
        //sound.play()
        this.game = g
        this.x = player.getBoundingRect().right - 5
        this.y = player.getBoundingRect().top + 50
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
    update() {
        this.x += 10;
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
        if (this.x > window.innerWidth) {
            this.game.removeBullet(this)
        }
        super.update()
    }
}