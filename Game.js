function Game() {

}

Game.prototype.init = function () {

    this.GameWorld = new GameWorld();
}

Game.prototype.start = function () {

    PoolGame.init();

    PoolGame.mainLoop();

}

Game.prototype.mainLoop = function () {

    Canvas.clear();
    PoolGame.GameWorld.update();
    PoolGame.GameWorld.draw();
    Mouse.reset();

    requestAnimationFrame(PoolGame.mainLoop);

}

let PoolGame = new Game();