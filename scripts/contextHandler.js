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
	var data = $.ajax({
		dataType: "json",
		url: "data/pokemon.json",
		data: data
	  });
	estadisticas();
	debilidades();
	fotillo();
	info();
}
var info = function(){	
	var titulo_nombre = document.createElement('h1');
	var nombre = "Shinx";
	titulo_nombre.id = "titulo_nombre"
	titulo_nombre.style.position = 'fixed';
	titulo_nombre.style.left = '49%';
	titulo_nombre.style.top = '27%';
	var titulo_japones = document.createElement('h2');
	var nombre_japones = "Kolinkコリンク";
	titulo_japones.id = "titulo_japones"
	titulo_japones.style.position = 'fixed';
	titulo_japones.style.left = '47%';
	titulo_japones.style.top = '55%';		
	var titulo_numero = document.createElement('h1');
	titulo_numero.id = "titulo_numero"
	titulo_numero.style.position = 'fixed';
	titulo_numero.style.left = '49%';
	titulo_numero.style.top = '22%';
	var numero = "#" +403;
	var titulo_clasificacion = document.createElement('h2');
	var clasificacion = "Kolinkコリンク";
	titulo_clasificacion.id = "titulo_japones"
	titulo_clasificacion.style.position = 'fixed';
	titulo_clasificacion.style.left = '47%';
	titulo_clasificacion.style.top = '55%';		
	document.body.appendChild(titulo_nombre);	
	document.body.appendChild(titulo_japones);	
	document.body.appendChild(titulo_numero);
	$(document).ready(function(){
		  $("#titulo_nombre").text(nombre);
		  $("#titulo_numero").text(numero);
		  $("#titulo_japones").text(nombre_japones);
	});
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

	var bicho = new Image();
	bicho.id = 'bicho'
	bicho.src = 'assets/tipos/bicho.png';
	bicho.style.width = 25;
	bicho.style.height = 25;
	var siniestro = new Image();
	siniestro.id = 'siniestro'
	siniestro.src = 'assets/tipos/siniestro.png';
	var dragon = new Image();
	dragon.id = 'dragon'
	dragon.src = 'assets/tipos/dragon.png';
	var electrico = new Image();
	electrico.id = 'electrico'
	electrico.src = 'assets/tipos/electrico.png';
	var hada = new Image();
	hada.id = 'hada'
	hada.src = 'assets/tipos/hada.png';
	var lucha = new Image();
	lucha.id = 'lucha'
	lucha.src = 'assets/tipos/lucha.png';
	var fuego = new Image();
	fuego.id = 'fuego'
	fuego.src = 'assets/tipos/fuego.png';
	var volador = new Image();
	volador.id = 'volador'
	volador.src = 'assets/tipos/volador.png';
	var fantasma = new Image();
	fantasma.id = 'fantasma'
	fantasma.src = 'assets/tipos/fantasma.png';
	var planta = new Image();
	planta.id = 'planta'
	planta.src = 'assets/tipos/planta.png';
	var tierra = new Image();
	tierra.id = 'tierra'
	tierra.src = 'assets/tipos/tierra.png';
	var hielo = new Image();
	hielo.id = 'hielo'
	hielo.src = 'assets/tipos/hielo.png';
	var normal = new Image();
	normal.id = 'normal'
	normal.src = 'assets/tipos/normal.png';
	var veneno = new Image();
	veneno.id = 'veneno'
	veneno.src = 'assets/tipos/veneno.png';
	var psiquico = new Image();
	psiquico.id = 'psiquico'
	psiquico.src = 'assets/tipos/psiquico.png';
	var roca = new Image();
	roca.id = 'roca'
	roca.src = 'assets/tipos/roca.png';
	var acero = new Image();
	acero.id = 'acero'
	acero.src = 'assets/tipos/acero.png';
	var agua = new Image();
	agua.id = 'agua'
	agua.src = 'assets/tipos/agua.png';

	canvasDebilidades.style.top = '77%';
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
			pointRadius: 7,
			pointStyle:[
				bicho,
				siniestro,
				dragon,
				electrico,
				hada,
				lucha,
				fuego,
				volador,
				fantasma,
				planta,
				tierra,
				hielo,
				normal,
				veneno,
				psiquico,
				roca,
				acero,
				agua
			]
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
					fontSize: 24,
					display: false
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