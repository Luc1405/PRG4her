export class GameObject {
    constructor(name) {
        this.x = 0;
        this.y = 0;
        const gameElement = document.querySelector('game');
        this.element = document.createElement(name);
        gameElement.appendChild(this.element);
    }
    getBoundingRect() {
        return this.element.getBoundingClientRect();
    }
    remove() {
        this.element.remove();
        this.element.innerHTML = "";
    }
    update() {
    }
}
//# sourceMappingURL=gameobject.js.map