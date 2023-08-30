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