var inicio = function () {
	document.body.style.backgroundImage = "url('assets/Fondo.jpg')";
    var pokiball = document.createElement('img');
    pokiball.src = 'assets/pokeball.gif';
    pokiball.id = 'pokiball'
    document.body.appendChild(pokiball);
    pokiball.onclick = function(){
    	var anim= document.createElement('img');
	    anim.src = 'assets/abrir.gif';
	    anim.id = 'pokiball'
	    document.body.appendChild(anim);
    	pokiball.remove();
    	setTimeout(function(){lista()}, 1000);
    };
};
 
var lista = function () {
	document.body.style.backgroundImage = "";
	document.getElementById("pokiball").remove();
};	
 
var informacion = function () {
	var nombre = "Bulbasaur"
	var hp_stat = 45
	var attack_stat = 49
	var deffense_stat = 49
	var speed_stat = 45
	var sp_deffense_stat = 65
	var sp_attack_stat = 65
	var canvas = document.createElement('canvas');
	canvas.id = 'chart';
	document.body.appendChild(canvas);
	var ctx = canvas.getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'radar',
		data: {
			labels: ["HP", "Attack", "Defense", "Speed", "Sp. Defense", "Sp. Attack"],
			datasets: [{
				data: [hp_stat, attack_stat, deffense_stat, speed_stat, sp_deffense_stat, sp_attack_stat],
				label: nombre + " Stats",
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
				],
				borderColor: [
					'rgba(255,99,132,1)',
				],
				borderWidth: 1
			}]
		},
		options: {
			responsive: true,
			scale:{
				ticks:{
					min: 0,
				}
			}			
		}
	});	
};