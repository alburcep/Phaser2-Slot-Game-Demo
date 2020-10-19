var splashState = {

	preload: function() {		
	
		//cargamos los assets
		this.load.image('fondo', 'assets/fondo.png');
    	this.load.image('simbolos', 'assets/simbolos.png');
    	this.load.image('spin', 'assets/spin.png');    	
    	//emulamos con un bucle una carga mayor de assets, así se puede observar el estado 'Splash'
    	for (var i = 0; i < 1200; i++) {
            this.load.image('fondo'+i, 'assets/fondo.png');
        }
        //onLoadComplete es un método 'on build'-> "This event is dispatched when the final file in the load queue has either loaded or failed."
    	this.load.onLoadComplete.add(this.cargaCompleta, this);   
    },
    cargaCompleta: function(){
		this.cargaLista = true;
	},	
	create: function() {
		console.log('llegamos a estado/state -> splash');
	},
	update: function() {
    	//llamamos siguiente estado
    	console.log('cargaListaUpdate? ->', this.cargaLista);
    	if(this.cargaLista === true) {
	       game.state.start('principal');
	    } 
  	}	

}