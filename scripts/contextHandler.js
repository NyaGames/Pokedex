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
 
var estadisticas = function () {
	var nombre = "Bulbasaur"
	var hp_stat = 45
	var attack_stat = 49
	var deffense_stat = 49
	var speed_stat = 45
	var sp_deffense_stat = 65
	var sp_attack_stat = 65
	var canvasEstadisticas = document.createElement('canvas');
	canvasEstadisticas.id = 'estadisticas';
	

	canvasEstadisticas.style.width = 500;
	canvasEstadisticas.style.height = 300;
	canvasEstadisticas.style.position = 'absolute';
	canvasEstadisticas.style.marginTop = 20;
	canvasEstadisticas.style.marginLeft = document.documentElement.clientWidth - 600;

	document.body.appendChild(canvasEstadisticas);
	var myChart = new Chart(canvasEstadisticas, {
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
			responsive: false,
			scale:{
				ticks:{
					min: 0,
				}
			}			
		}
	});
};
	// Change the display size
	//estadisticas.resize(300, 200);
	// Resync the render size
	//estadisticas.resize();	
var debilidades = function () {
	var nombre = "Bulbasaur"
	var hp_stat = 10
	var attack_stat = 20
	var deffense_stat = 30
	var speed_stat = 40
	var sp_deffense_stat = 50
	var sp_attack_stat = 60

	var canvasDebilidades = document.createElement('canvas');
	canvasDebilidades.id = 'debilidades';


	canvasDebilidades.style.marginTop = 180;
	canvasDebilidades.style.marginLeft = document.documentElement.clientWidth - 1400;
	canvasDebilidades.style.position = 'absolute';
	canvasDebilidades.style.WebkitTransform = "scale(0.4,0.5)";

	document.body.appendChild(canvasDebilidades);

	var myChart2 = new Chart(canvasDebilidades, {
		type: 'bar',
    data: {
        labels: ["HP", "Attack", "Defense", "Speed", "Sp. Defense", "Sp. Attack"],
        datasets: [{
            
            data: [hp_stat, attack_stat, deffense_stat, speed_stat, sp_deffense_stat, sp_attack_stat],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    	legend: {
    		display: false
    	},
    	scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

	// Change the display size
	//debilidades.resize(300, 200);
	// Resync the render size
	//debilidades.resize();	
};