import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Background } from "./background.js";
import { Bullet } from "./bullet.js";
import { StartButton } from "./startbutton.js";
import { EndScreen } from "./endscreen.js";
import { Timer } from "./timer.js";
import { Boss } from "./boss.js";
export class Game {
    constructor() {
        this.enemies = [];
        this.lives = 3;
        this.bullets = [];
        this.Bosslives = 5;
        this.background = new Background();
        let startButton = new StartButton(this);
        this.gameLoop();
    }
    startGame() {
        this.timer = new Timer(this);
        this.background = new Background();
        this.player = new Player(this);
        document.createElement("scoreboard");
        this.boss = new Boss;
        for (let i = 0; i < 7; i++) {
            this.enemies.push(new Enemy());
        }
        this.gameLoop();
    }
    showEndScreen() {
        let endscreen = new EndScreen(this);
    }
    gameLoop() {
        this.background.update();
        this.player.update();
        for (let b of this.bullets) {
            b.update();
        }
        for (const enemy of this.enemies) {
            enemy.update();
            if (this.checkCollision(this.player.getBoundingRect(), enemy.getBoundingRect())) {
                this.lives = this.lives - 1;
                enemy.remove();
                this.enemies.push(new Enemy());
            }
        }
        this.timer.update();
        if (this.timer.timer == 1) {
            this.boss.set();
        }
        if (this.timer.timer == 0) {
            this.boss.update();
        }
        this.checkBulletCollisions();
        if (this.lives == 0 || this.Bosslives == 0) {
            this.removeAll();
        }
        requestAnimationFrame(() => this.gameLoop());
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
            if (this.checkCollision(b.getBoundingRect(), this.boss.getBoundingRect())) {
                this.removeBullet(b);
                this.Bosslives = this.Bosslives - 1;
            }
        }
    }
    addBullet() {
        this.bullets.push(new Bullet(this.player, this));
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
        this.enemies = [];
        this.player.remove();
        this.boss.remove();
        this.background.remove();
        this.timer.remove();
        this.showEndScreen();
    }
}
new Game();
//# sourceMappingURL=game.js.map