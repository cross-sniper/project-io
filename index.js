document.body.onload = function(){
// draw.js

function draw(ctx) {

    render.drawRect(player.x,player.y,player.w,player.h,player.color)

    // ... (other drawing logic)
}

// Render.js

class Render {
    /*
    creates a new canvas, and renderer
    */
    constructor(id,fps=16, w = 400,h=300) {
        
        this.element = document.createElement('canvas'); // Create a canvas element
        this.element.width  = w
        this.element.height = h
        document.body.appendChild(this.element)
        this.context = this.element.getContext('2d');
        this.isLooping = false;
        this.drawFunctions = [];
        this.basicMovement = false;
        this.keyState = {};
    }

    clear() {
        this.context.clearRect(0, 0, this.element.width, this.element.height);
    }
    addControlState(controlName) {
        this.keyState[controlName] = false;

        // Handle control key presses
        addEventListener('keydown', (event) => {
            if (event.key === controlName) {
                this.keyState[controlName] = true;
            }
        });

        // Handle control key releases
        addEventListener('keyup', (event) => {
            if (event.key === controlName) {
                this.keyState[controlName] = false;
            }
        });
    }
    addBasicControll(player, movementSpeed) {
        this.basicMovement = true;

        const keyState = {};

        addEventListener('keydown', (event) => {
            keyState[event.key] = true;
        });

        addEventListener('keyup', (event) => {
            keyState[event.key] = false;
        });

        const updatePlayerPosition = () => {
            if (keyState['ArrowUp']) {
                player.y -= movementSpeed;
            }
            if (keyState['ArrowDown']) {
                player.y += movementSpeed;
            }
            if (keyState['ArrowLeft']) {
                player.x -= movementSpeed;
            }
            if (keyState['ArrowRight']) {
                player.x += movementSpeed;
            }

            requestAnimationFrame(updatePlayerPosition);
        };

        updatePlayerPosition();
    }

    GetControllState(controlName) {
        return !!this.keyState[controlName];
    }

    background(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.element.width, this.element.height);
    }

    drawRect(x, y, width, height, color) {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, width, height);
    }

    startLoop() {
        if (!this.isLooping) {
            this.isLooping = true;
            this.loop();
        }
    }

    stopLoop() {
        this.isLooping = false;
    }

    loop() {
        if (!this.isLooping) return;

        this.clear();
        this.background('black');

        for (const drawFunction of this.drawFunctions) {
            drawFunction(this.context);
        }

        if(this.onUpdate) this.onUpdate()

        requestAnimationFrame(() => this.loop());
    }

    addDrawFunction(drawFunction) {
        this.drawFunctions.push(drawFunction);
    }
}

//main.js

const player = {
    x:20,
    y:30,
    w:30,
    h:30,
    color:'red'
}

const render = new Render('gameCanvas',16,1080,600); // 'gameCanvas' is the ID of the canvas element
render.addBasicControll(player,3)
render.addDrawFunction(draw)//defined in its own file
render.startLoop()
}
document.title = "projct x"