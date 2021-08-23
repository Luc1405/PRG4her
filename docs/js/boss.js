import { GameObject } from "./gameobject.js";
export class Boss extends GameObject {
    getBoundingRect() {
        return this.element.getBoundingClientRect();
    }
    constructor() {
        super("boss");
        this.x = Math.floor(window.innerWidth + this.element.clientWidth) + 500;
        this.y = Math.floor((window.innerHeight + this.element.clientHeight) + 500);
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
        const game = document.querySelector('game');
    }
    set() {
        this.x = Math.floor(window.innerWidth - this.element.clientWidth) + 500;
        this.y = Math.floor((window.innerHeight - this.element.clientHeight) / 2);
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
        console.log("karbonkel");
    }
    update() {
        console.log("poep");
        this.x = Math.floor(window.innerWidth - this.element.clientWidth) - 200;
        if (this.y < Math.floor((window.innerHeight - this.element.clientHeight))) {
            this.y += 3;
        }
        else {
            this.y = 0;
        }
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=boss.js.map