import { GameObject } from "./gameobject.js";
import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Background } from "./background.js";
import { Bullet } from "./bullet.js";
export class Gamescreen extends GameObject {
    constructor(g) {
        super("gamescreen");
        this.enemies = [];
        this.lives = 3;
        this.bullets = [];
        this.background = new Background();
        this.game = g;
        this.player = new Player(this.game);
        document.createElement("scoreboard");
        this.element.innerHTML = "Lives:" + this.lives;
        for (let i = 0; i < 7; i++) {
            this.enemies.push(new Enemy());
        }
    }
    update() {
        this.player.update();
        this.background.update();
        for (const enemy of this.enemies) {
            enemy.update();
            if (this.checkCollision(this.player.getBoundingRect(), enemy.getBoundingRect())) {
                this.lives = this.lives - 1;
                enemy.remove();
                this.enemies.push(new Enemy());
                this.element.innerHTML = "Lives:" + this.lives;
            }
        }
        for (let b of this.bullets) {
            b.update();
        }
        this.checkBulletCollisions();
        if (this.lives == 0) {
            this.removeAll();
            this.game.showEndScreen();
        }
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
    checkBulletCollisions() {
        for (let b of this.bullets) {
            for (let e of this.enemies) {
                if (this.checkCollision(b.getBoundingRect(), e.getBoundingRect())) {
                    this.removeBullet(b);
                    this.removeEnemy(e);
                }
            }
        }
    }
    addBullet() {
        this.bullets.push(new Bullet(this.player, this.game));
    }
    removeBullet(bullet) {
        bullet.remove();
        this.bullets = this.bullets.filter(b => b !== bullet);
    }
    removeEnemy(enemy) {
        enemy.remove();
        this.enemies = this.enemies.filter(e => e !== enemy);
        this.enemies.push(new Enemy());
    }
    removeAll() {
        for (let enemy of this.enemies) {
            enemy.remove();
        }
        this.player.remove();
        this.remove();
        this.enemies = [];
        this.background.remove();
    }
}
//# sourceMappingURL=gamescreen.js.map