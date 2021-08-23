import { GameObject } from "./gameobject.js";
export class Player extends GameObject {
    constructor(g) {
        super("player");
        this.verticalSpeed = 0;
        this.horizontalSpeed = 0;
        this.game = g;
        window.addEventListener("keyup", (e) => this.onKeyUpHandler(e));
        window.addEventListener("keydown", (e) => this.onKeyDownHandler(e));
    }
    getBoundingRect() {
        return this.element.getBoundingClientRect();
    }
    onKeyDownHandler(e) {
        console.log(e.key);
        switch (e.key) {
            case " ":
                console.log("Shoot!");
                break;
            case "ArrowUp":
                this.verticalSpeed = -5;
                break;
            case "ArrowDown":
                this.verticalSpeed = 5;
                break;
            case "ArrowRight":
                this.horizontalSpeed = 5;
                break;
            case "ArrowLeft":
                this.horizontalSpeed = -5;
                break;
            default:
                break;
        }
    }
    onKeyUpHandler(e) {
        if (e.key == "ArrowUp" || e.key == "ArrowDown" || e.key == "ArrowRight" || e.key == "ArrowLeft") {
            this.verticalSpeed = 0;
            this.horizontalSpeed = 0;
        }
        if (e.key === " ") {
            this.game.addBullet();
        }
    }
    update() {
        this.y += this.verticalSpeed;
        this.x += this.horizontalSpeed;
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=player.js.map