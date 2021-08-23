import { GameObject } from "./gameobject.js"

export class Boss extends GameObject {

    //frames = 3
    //frame = 0
    //framewidth = 32
    //speedcounter = 0

    public getBoundingRect() : DOMRect {
        return this.element.getBoundingClientRect()
    }

    constructor(){
        super("boss")
        // Generate a random x and y value within the width and height of the viewport
        this.x = Math.floor(window.innerWidth + this.element.clientWidth) + 500
        this.y = Math.floor((window.innerHeight + this.element.clientHeight) + 500)
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`


        const game = document.querySelector('game') as HTMLElement
    
    }

    public set() : void {
        this.x = Math.floor(window.innerWidth - this.element.clientWidth) + 500
        this.y = Math.floor((window.innerHeight - this.element.clientHeight) / 2)
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }


    public update(): void {

        //this.speedcounter++
        //if(this.speedcounter%20 == 0) this.frame++

        //if(this.frame >= this.frames) this.frame = 0

        //let pos = 0 - (this.frame*this.framewidth)
        //this.element.style.backgroundPosition = pos + 'px 0px'
         // Move the asteroid (x-value) to the left. 
         this.x = Math.floor(window.innerWidth - this.element.clientWidth) - 200
         if (this.y < Math.floor((window.innerHeight - this.element.clientHeight))) {
             this.y += 3
         } else {
             this.y = 0
         }
         this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
    
}