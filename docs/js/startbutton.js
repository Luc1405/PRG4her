import { GameObject } from "./gameobject.js";
export class StartButton extends GameObject {
    constructor(g) {
        super("startbutton");
        this.game = g;
        this.element.innerHTML = "START";
        this.element.addEventListener("click", () => this.startGame());
    }
    startGame() {
        this.game.startGame();
        this.element.remove();
    }
}
//# sourceMappingURL=startbutton.js.map