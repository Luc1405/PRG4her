import { GameObject } from "./gameobject.js";
export class Bullet extends GameObject {
    constructor(player, g) {
        super("bullet");
        this.game = g;
        this.x = player.getBoundingRect().right - 5;
        this.y = player.getBoundingRect().top + 50;
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    update() {
        this.x += 10;
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
        if (this.x > window.innerWidth) {
            this.game.removeBullet(this);
        }
        super.update();
    }
}
//# sourceMappingURL=bullet.js.map