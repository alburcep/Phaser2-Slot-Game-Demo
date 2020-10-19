var principalState = {
	create: function() {
		console.log('llegamos a state principal');
		//tileSprite -> (imágenes que se pueden repetir en bucle)
		carril1 = game.add.tileSprite(270, -50, 56, 590, 'simbolos');
		carril2 = game.add.tileSprite(370, 20, 56, 590, 'simbolos');
		carril3 = game.add.tileSprite(475, -250, 56, 590, 'simbolos');
	    //console.log(this.world.height);		
		fondo = this.add.sprite(game.world.centerX, game.world.centerY, 'fondo');
		fondo.anchor.setTo(0.5, 0.5);	
		//hora	
    	const urlHora = 'http://worldtimeapi.org/api/ip';
			fetch(urlHora)
				.then((resp) => resp.json())
				.then(data =>  {      		
		      		console.log('data fetch->', data)
		      		let horaLocal = data.datetime;
		      		console.log(horaLocal)		      		
		      		var d = new Date(horaLocal); 
					let horaFormat = d.toLocaleString();

		      		hora = this.add.text(game.world.centerX, game.world.centerY, horaFormat, { 
			font: "20px Arial", fill: "#fff"});
	    			hora.anchor.setTo(0.5, 7);
		      	})
		//btn		
		spinBtn = this.add.button(game.world.centerX, game.world.centerY, 'spin', this.pulsarSpin);
		spinBtn.anchor.setTo(0.5, -1);	
	},
	pulsarSpin: function() {
		let avanzar = setInterval(function(){
		  	console.log('avanzamos');		
		  	setTimeout(function(){ 
				//console.log('1r spin...')
				  	carril1.tilePosition.y += 8;
			}, 500)
			setTimeout(function(){ 
				carril2.tilePosition.y += 8;
			}, 1000)
			setTimeout(function(){ 
				carril3.tilePosition.y += 8;
			}, 1500)
		}, 1);	

		setInterval(function(){
			clearInterval(avanzar);
		}, 3000)
		 		
	} 		
	
}