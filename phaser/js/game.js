var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    //margin: 0 auto,
    parent: '',
    loader: {
        baseURL: 'assets'
    },
    scene: {
        loader: {
            path: 'sprites'
        }
    }
};

var game = new Phaser.Game(config);

//añadimos estados del juego / Comenzamos por estado 'boot'
game.state.add('boot', bootState);
game.state.add('splash', splashState);
game.state.add('principal', principalState);

//vamos al siguiente  estado
game.state.start('boot');