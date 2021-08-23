import { GameObject } from "./gameobject.js"
import { Player } from "./player.js"
import { Enemy } from "./enemy.js"
import { Background } from "./background.js"
import { Bullet } from "./bullet.js"
import { StartButton } from "./startbutton.js"
import { EndScreen } from "./endscreen.js"
import { Timer } from "./timer.js"
import { Boss } from "./boss.js"

export class Game {

    private game : Game
    private player : Player
    private enemies : Enemy[] = []
    private background : Background
    private lives : number = 3
    private bullets : Bullet[] = []
    private screen: GameObject
    private timer : Timer
    private boss : Boss
    private Bosslives : number = 5
    private endscreen : EndScreen

    constructor(){
        this.background = new Background()
        let startButton = new StartButton(this)
        this.gameLoop()
    }

    public startGame() {
        this.timer = new Timer(this)
        this.background = new Background()
        this.player = new Player(this)
        document.createElement("scoreboard")
        this.boss = new Boss
        
        for (let i : number = 0; i < 7; i++) {
            this.enemies.push(new Enemy())
        }
        this.gameLoop()
    }

    public showEndScreen() {
        let endscreen = new EndScreen(this)
    }

    private gameLoop(){

        this.background.update()
        this.player.update()
        for (let b of this.bullets) {
            b.update()
        }

         for (const enemy of this.enemies) {
             enemy.update()
    
             if (this.checkCollision(this.player.getBoundingRect(), enemy.getBoundingRect())) {
                 this.lives = this.lives -1
                 enemy.remove() 
                 this.enemies.push(new Enemy())
             }
        }

        this.timer.update()

        if (this.timer.timer == 1) {
            this.boss.set()
        }

        if (this.timer.timer == 0 ) {
            this.boss.update()
        }
        this.checkBulletCollisions()
    
        if (this.lives == 0 || this.Bosslives == 0) {
            this.removeAll()
        }
        requestAnimationFrame(()=>this.gameLoop())
    }

    private checkCollision(a: ClientRect, b: ClientRect): boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
    
    
    private checkBulletCollisions() {
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
    
    public addBullet() {
        this.bullets.push(new Bullet(this.player, this))
    }
    
    public removeBullet(bullet:Bullet) {
        bullet.remove()
        this.bullets = this.bullets.filter(b => b !== bullet)
    }
    
    public removeEnemy(enemy:Enemy) {
        enemy.remove()
        this.enemies = this.enemies.filter(e => e !== enemy)
        this.enemies.push(new Enemy())
    }
    
    private removeAll() {
        for (let enemy of this.enemies) {
            enemy.remove()
        }
        this.player.remove()
        this.enemies = []
        this.player.remove()
        this.boss.remove()
        this.background.remove()
        this.timer.remove()
        this.showEndScreen()

    }
}

new Game()