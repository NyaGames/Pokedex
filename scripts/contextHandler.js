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
 
var informacion = function(){
	var x = new XMLHttpRequest();
	x.open("GET", "data/prueba.xml", true);
	x.onreadystatechange = function () {
	if (x.readyState == 4 && x.status == 200)
	{
		var doc = x.responseXML;
		// …
	}
	};
	x.send(null);
	estadisticas();
	debilidades();
	fotillo();
}
var fotillo = function(){
	var numero = 403;
	var fotillo = new Image();
	fotillo.id = 'fotillo'
	fotillo.src = 'assets/sprites/'+numero+'.png';
	fotillo.style.position = 'fixed';
	fotillo.style.top = '45%';
	fotillo.style.left = '50%';
	fotillo.style.marginTop = -128;
	fotillo.style.marginLeft = -128;
	fotillo.style.zIndex = 999;
	document.body.appendChild(fotillo);
}
var estadisticas = function () {
	var nombre = "Shinx"
	var hp_stat = 45
	var attack_stat = 65
	var deffense_stat = 34
	var speed_stat = 40
	var sp_deffense_stat = 34
	var sp_attack_stat = 45
	var canvasEstadisticas = document.createElement('canvas');
	canvasEstadisticas.id = 'estadisticas';
	

	canvasEstadisticas.style.width = 350;
	canvasEstadisticas.style.height = 350;
	canvasEstadisticas.style.position = 'fixed';
	canvasEstadisticas.style.top = '17%';
	canvasEstadisticas.style.left = '75%';
	canvasEstadisticas.style.marginTop = -150;
	canvasEstadisticas.style.marginLeft = -150;
	canvasEstadisticas.style.zIndex = 1;

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

var debilidades = function () {
	var ab = 1;
	var ad = 1;
	var adr = 1;
	var ae = 0.5;
	var af = 1;
	var afi = 1;
	var afir = 1;
	var afy = 0.5;
	var ag = 1;
	var agr = 1;
	var agro = 1;
	var ai = 1;
	var an = 1;
	var ap = 1;
	var apy = 1;
	var ar = 1;
	var as = 0.5;
	var aw = 1;
	var canvasDebilidades = document.createElement('canvas');
	canvasDebilidades.id = 'debilidades';


	canvasDebilidades.style.top = '75%';
	canvasDebilidades.style.left = '75%';
	canvasDebilidades.style.position = position = 'fixed';
	canvasDebilidades.style.WebkitTransform = "scale(0.4,0.5)";
	canvasDebilidades.style.zIndex = 0;
	canvasDebilidades.style.marginTop = -550;
	canvasDebilidades.style.marginLeft = -900;

	document.body.appendChild(canvasDebilidades);

	var myChart2 = new Chart(canvasDebilidades, {
		type: 'line',
    data: {
        labels: ["Bug", "Dark", "Dragon", "Electric", "Fairy", "Fight", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"],
        datasets: [{            
            data: [ab, ad, adr,	ae,	af,	afi, afir, afy,	ag, agr, agro, ai, an, ap,	apy, ar, as, aw],
            backgroundColor: [
				'rgba(255, 99, 132, 0)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
			borderWidth: 1,
			pointRadius: 7
        }]
    },
    options: {
		elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
    	legend: {
    		display: false
    	},
    	scales: {
			xAxes: [{
                ticks: {
					fontSize: 24
                }
            }],
            yAxes: [{
                ticks: {
					beginAtZero:true,
					min: 0,
					max: 4,
					fontSize: 24
                }
            }]
        }
    }
});
};