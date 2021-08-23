import { GameObject } from "./gameobject.js";
export class EndScreen extends GameObject {
    constructor(game) {
        super("endscreen");
        this.game = game;
        const text = document.createElement("div");
        const btn = document.createElement("button");
        this.element.appendChild(text);
        this.element.appendChild(btn);
        text.innerText = "Game Over";
        btn.innerText = "Return to Start";
        btn.addEventListener("click", () => this.toStartScreen());
    }
    toStartScreen() {
        window.location.reload();
        this.remove();
    }
}
//# sourceMappingURL=endscreen.js.map