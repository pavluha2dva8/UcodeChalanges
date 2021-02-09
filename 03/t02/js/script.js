class Timer {
    constructor(title, delay, stopCount){
        this.title = title,
        this.delay = delay,
        this.stopCount = stopCount
    }
    start(){
        console.log(`Timer ${this.title} started (delay=${this.delay}), stopCount=${this.stopCount}`)
        this.tick()
    }
    tick(){
        let counter = this.stopCount
        let i = setInterval(() => {
            console.log(`Timer ${this.title} Tick! | cycles left ${counter}`)
            counter--
            if(counter < 0) {
                clearInterval(i)
                this.stop()
            }
        }, this.delay)
    }
    stop(){
        console.log(`Timer ${this.title} stopped`)
    }
}

let runTimer = (id, delay, counter) => {
    let timer = new Timer (id, delay, counter)
    return timer.start()
}

runTimer('Beep', 1000, 9)