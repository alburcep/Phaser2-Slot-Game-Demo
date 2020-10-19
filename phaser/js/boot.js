var bootState = {

	preload: function() {
	    //assets para splash.js
		this.load.image('logo', 'assets/slotLogo.png');
    	this.load.image('barra', 'assets/progress-bar.png'); 
	},
	create: function() {
	    //cargar 'bg, logo, textoLogo y barra de carga' preparado para el siguiente estado splash.js
	    bg = this.stage.backgroundColor = "#fff";
		logo = this.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    	logo.anchor.setTo(0.5, 2.7);
    	logo.scale.setTo(0.4, 0.4);
		txt = this.add.text(game.world.centerX, game.world.centerY, 'Logo', { 
		font: "65px Arial", fill: "#000"});
	    txt.anchor.setTo(0.5, 2);		
    	barra = this.add.sprite(game.world.centerX, game.world.centerY, 'barra');
    	barra.anchor.setTo(0.5, 0);	

	},
	update: function() {
    	//llamamos siguiente estado
		game.state.start('splash');
  	}
};