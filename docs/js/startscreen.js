import { GameObject } from "./gameobject.js";
import { Background } from "./background.js";
export class Startscreen extends GameObject {
    constructor(game) {
        super("startscreen");
        this.game = game;
        this.background = new Background();
        const text = document.createElement("div");
        const btn = document.createElement("button");
        this.element.appendChild(text);
        this.element.appendChild(btn);
        text.innerText = "Save your baby!";
        btn.innerText = "START GAME";
        btn.addEventListener("click", () => this.toGameScreen());
    }
    toGameScreen() {
        this.remove();
    }
}
//# sourceMappingURL=startscreen.js.map