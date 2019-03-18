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
	estadisticas();
	debilidades();
	fotillo();
	info();
}


var info = function(){		
	var canvasInfo = document.createElement('canvas');
	canvasInfo.id = 'info';
	canvasInfo.style.position = 'fixed';
	canvasInfo.style.top = '17%';
	canvasInfo.style.left = '9%';
	canvasInfo.style.height = 900;
	canvasInfo.style.marginTop = -150;
	canvasInfo.style.marginLeft = -150;
	canvasInfo.style.zIndex = 1;

	var titulo_nombre = document.createElement('h1');
	var nombre = "Shinx";
	titulo_nombre.id = "titulo_nombre"
	titulo_nombre.style.position = 'fixed';
	titulo_nombre.style.fontSize= 150;
	titulo_nombre.style.color= "yellow";
	titulo_nombre.style.left = '42%';
	titulo_nombre.style.top = '-9%';

	var titulo_japones = document.createElement('h2');
	var nombre_japones = "Kolinkコリンク";
	titulo_japones.id = "titulo_japones"
	titulo_japones.style.position = 'fixed';
	titulo_japones.style.color= "pink";
	titulo_japones.style.left = '47%';
	titulo_japones.style.top = '60%';

	var titulo_numero = document.createElement('h1');	
	var numero = "#" +403;
	titulo_numero.id = "titulo_numero"
	titulo_numero.style.position = 'fixed';
	titulo_numero.style.fontSize= 200;
	titulo_numero.style.color= "#BED5D8";
	titulo_numero.style.left = '40%';
	titulo_numero.style.top = '3%';

	var titulo_clasificacion = document.createElement('h2');
	var clasificacion = "Pokemon Monisimo";
	titulo_clasificacion.id = "titulo_clasificacion";
	titulo_clasificacion.style.position = 'fixed';
	titulo_clasificacion.style.color= "orange";
	titulo_clasificacion.style.left = '46%';
	titulo_clasificacion.style.top = '17%';	

	var huevo = new Image();
	huevo.id = 'huevo'
	huevo.src = 'assets/huevo.png';
	var pasos =" : " +5120;

	var titulo_amistad = document.createElement('h3');
	var amistad = "Amistad base: "+70;
	titulo_amistad.id = "titulo_amistad";

	var titulo_captura = document.createElement('h3');
	var captura = "Ratio de captura: "+235;
	titulo_captura.id = "titulo_captura";

	var titulo_experiencia = document.createElement('h3');
	var experiencia = "Experiencia para nivel 100: "+1059860;
	titulo_experiencia.id = "titulo_experiencia";

	var titulo_altura = document.createElement('h3');
	var altura = "Altura (m): "+0.5;
	titulo_altura.id = "titulo_altura";

	var titulo_peso = document.createElement('h3');
	var peso = "Peso (kg): "+9.5;
	titulo_peso.id = "titulo_peso";

	var titulo_genero = document.createElement('h3');
	var genero = "Probabilidad macho: "+0.5+ ",   Probabilidad hembra: "+(1-0.5);
	titulo_genero.id = "titulo_genero";

	var titulo_tipo = document.createElement('h3');
	var tipo = "Tipo 1: "+"Eléctrico"+ ",  Tipo 2: "+ "";
	titulo_tipo.id = "titulo_tipo";

	var titulo_competitivo = document.createElement('h3');
	var competitivo = "Tier: "+"LC"+ ",  Rol: "+ "Sweeper";
	titulo_competitivo.id = "titulo_competitivo";

	document.body.appendChild(canvasInfo);	
	$(canvasInfo).ready(function(){
		var ctx = canvasInfo.getContext("2d");
		ctx.drawImage(huevo,0,20,huevo.width,huevo.height,0,0,canvasInfo.width/100,canvasInfo.height/100);
  	});
}
var fotillo = function(){
	var numero = 403;
	var fotillo = new Image();
	fotillo.id = 'fotillo'
	fotillo.src = 'assets/sprites/'+numero+'.png';
	fotillo.style.position = 'fixed';
	fotillo.style.top = '50%';
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

	var titulo_estadisticas = document.createElement('h3');
	var base_estadisticas = "Estadisticas base: "+263;
	titulo_estadisticas.id = "titulo_estadisticas";
	titulo_estadisticas.style.position = 'fixed';
	titulo_estadisticas.style.top = '37%';
	titulo_estadisticas.style.left = '73%';
	titulo_estadisticas.style.zIndex = 2;
	$(document).ready(function(){
		$("#titulo_estadisticas").text(base_estadisticas);
  	});

	document.body.appendChild(canvasEstadisticas);
	document.body.appendChild(titulo_estadisticas);
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