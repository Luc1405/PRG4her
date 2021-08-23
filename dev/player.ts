import { GameObject } from "./gameobject.js"
import { Game } from "./game.js"

export class Player extends GameObject {

    public verticalSpeed : number = 0
    public horizontalSpeed : number = 0
    private game : Game
    public getBoundingRect() : DOMRect {
        return this.element.getBoundingClientRect()
    }

    constructor(g: Game){
        super("player")
        this.game = g
        // Add the event listeners to the window for the keyboard events
        window.addEventListener("keyup", (e : KeyboardEvent) => this.onKeyUpHandler(e) )
        window.addEventListener("keydown" , (e : KeyboardEvent) => this.onKeyDownHandler(e)  )

    }

    private onKeyDownHandler(e: KeyboardEvent): any {
        console.log(e.key)

       switch (e.key) {
            case " ":
                console.log("Shoot!")

                break;
           case "ArrowUp":
               this.verticalSpeed = -5
        
               break;
            case "ArrowDown":
                this.verticalSpeed = 5
                break;
            case "ArrowRight":
               this.horizontalSpeed = 5
        
               break;
            case "ArrowLeft":
               this.horizontalSpeed = -5
        
               break;
           default:
               break;
       }
        
    }
    private onKeyUpHandler(e: KeyboardEvent): any {
        if (e.key == "ArrowUp" || e.key == "ArrowDown" || e.key == "ArrowRight" || e.key == "ArrowLeft"){
            this.verticalSpeed = 0
            this.horizontalSpeed = 0
        }
        if (e.key === " ") {
            this.game.addBullet()
        }
        
            
    }

    public update(): void{
                this. y += this.verticalSpeed
                this.x += this.horizontalSpeed
                this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}