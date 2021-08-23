export class Timer {
    constructor(g) {
        this._timer = 1800;
        this.game = g;
        const game = document.querySelector('game');
        this.timebar = document.createElement("timer");
        game.appendChild(this.timebar);
    }
    get timer() {
        return this._timer;
    }
    update() {
        if (this._timer > 0) {
            this._timer--;
        }
        let secondsLeft = Math.floor(this._timer / 60);
        let timerText = "Seconds left:" + secondsLeft;
        this.timebar.innerHTML = timerText;
        console.log(this._timer);
    }
    remove() {
        this.timebar.remove();
    }
}
//# sourceMappingURL=timer.js.map