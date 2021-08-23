import { GameObject } from "./gameobject.js";
export class Enemy extends GameObject {
    getBoundingRect() {
        return this.element.getBoundingClientRect();
    }
    constructor() {
        super("enemy");
        this.x = Math.floor(Math.random() * (window.innerWidth - this.element.clientWidth)) + 500;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.element.clientHeight));
        const game = document.querySelector('game');
    }
    update() {
        this.x -= 3;
        if (this.x + this.element.clientWidth < 0) {
            this.x = window.innerWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.element.clientHeight));
        }
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=enemy.js.map