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
 

function scrolleameEsta(){
	var elmnt = document.getElementsByClassName("contenedor");
  var x = elmnt.scrollLeft;
  var y = elmnt.scrollTop;
};

var lista = function () {
	var cosadelistas = document.createElement('div');
	cosadelistas.className = "columnas";
	cosadelistas.style.display = "flex";
	document.body.appendChild(cosadelistas);
	var cosadebuscar = document.createElement('div');
	cosadebuscar.className = "buscador";
	cosadebuscar.style.backgroundColor = "#bbb";
	cosadebuscar.style.flex = "35%";
	cosadebuscar.style.paddingTop = "15";
	cosadebuscar.style.paddingRight = "0";
	cosadelistas.appendChild(cosadebuscar);
	var cosademostrar = document.createElement('div');
	cosademostrar.className = "lista";
	cosademostrar.style.height = "1000";
	cosademostrar.style.overflow = "auto";	
	cosademostrar.onscroll = scrolleameEsta();
	//cosademostrar.style.backgroundColor = "#ddd";
	cosademostrar.style.flex = "65%";
	cosademostrar.style.paddingTop = "15";
	cosademostrar.style.paddingRight = "0";
	cosadelistas.appendChild(cosademostrar);
	var lista = document.createElement('div');
	lista.className = "contenedor";
	lista.style.height = "3000"
	for (let index = 0; index < 804; index++) {	
		var botoncillo = document.createElement('div');
		botoncillo.className = "boton";
		botoncillo.id = index +1;
		botoncillo.style.backgroundColor = "grey";
		botoncillo.style.height = "200";
		botoncillo.style.width = "200";
		botoncillo.style.padding = "10";
		botoncillo.style.margin = "10";
		botoncillo.style.textAlign = "center";
		botoncillo.style.color = "white";
		botoncillo.style.overflow = "wrap";	
		botoncillo.style.float = "left";
		lista.appendChild(botoncillo);		
	}
	cosademostrar.appendChild(lista);
};	
 
var informacion = function(){
	estadisticas();
	debilidades();
	fotillo();
	info();
}

var info = function(){		
	var bicho = new Image();
	bicho.id = 'bicho'
	bicho.src = 'assets/TiposGrande/bicho.png';
	var siniestro = new Image();
	siniestro.id = 'siniestro'
	siniestro.src = 'assets/TiposGrande/siniestro.png';
	var dragon = new Image();
	dragon.id = 'dragon'
	dragon.src = 'assets/TiposGrande/dragon.png';
	var electrico = new Image();
	electrico.id = 'electrico'
	electrico.src = 'assets/TiposGrande/electrico.png';
	var hada = new Image();
	hada.id = 'hada'
	hada.src = 'assets/TiposGrande/hada.png';
	var lucha = new Image();
	lucha.id = 'lucha'
	lucha.src = 'assets/TiposGrande/lucha.png';
	var fuego = new Image();
	fuego.id = 'fuego'
	fuego.src = 'assets/TiposGrande/fuego.png';
	var volador = new Image();
	volador.id = 'volador'
	volador.src = 'assets/TiposGrande/volador.png';
	var fantasma = new Image();
	fantasma.id = 'fantasma'
	fantasma.src = 'assets/TiposGrande/fantasma.png';
	var planta = new Image();
	planta.id = 'planta'
	planta.src = 'assets/TiposGrande/planta.png';
	var tierra = new Image();
	tierra.id = 'tierra'
	tierra.src = 'assets/TiposGrande/tierra.png';
	var hielo = new Image();
	hielo.id = 'hielo'
	hielo.src = 'assets/TiposGrande/hielo.png';
	var normal = new Image();
	normal.id = 'normal'
	normal.src = 'assets/TiposGrande/normal.png';
	var veneno = new Image();
	veneno.id = 'veneno'
	veneno.src = 'assets/TiposGrande/veneno.png';
	var psiquico = new Image();
	psiquico.id = 'psiquico'
	psiquico.src = 'assets/TiposGrande/psiquico.png';
	var roca = new Image();
	roca.id = 'roca'
	roca.src = 'assets/TiposGrande/roca.png';
	var acero = new Image();
	acero.id = 'acero'
	acero.src = 'assets/TiposGrande/acero.png';
	var agua = new Image();
	agua.id = 'agua'
	agua.src = 'assets/TiposGrande/agua.png';
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
	huevo.src = 'assets/info/huevo.png';
	var pasos =" : " +5120;
	var canvasPasos = document.createElement('canvas');
	canvasPasos.id = 'cPasos';
	canvasPasos.style.position = 'fixed';
	canvasPasos.style.top = '17%';
	canvasPasos.style.left = '9%';
	canvasPasos.style.marginTop = -150;
	canvasPasos.style.marginLeft = -150;
	canvasPasos.style.zIndex = 1;
	var huellas = new Image();
	huellas.id = 'huellas'
	huellas.src = 'assets/info/huellas.png';
	
	var corazoncillo = new Image();
	corazoncillo.id = 'corazoncillo'
	corazoncillo.src = 'assets/info/amistad.png';
	var amistad = " : "+70;
	var canvasAmistad = document.createElement('canvas');
	canvasAmistad.id = 'cAmistad';
	canvasAmistad.style.position = 'fixed';
	canvasAmistad.style.top = '25%';
	canvasAmistad.style.left = '9%';
	canvasAmistad.style.marginTop = -150;
	canvasAmistad.style.marginLeft = -150;
	canvasAmistad.style.zIndex = 1;

	var captura = new Image();
	captura.id = 'captura'
	captura.src = 'assets/info/captura.png';
	var ratiocaptura = " : "+235;
	var canvasCaptura = document.createElement('canvas');
	canvasCaptura.id = 'cCaptura';
	canvasCaptura.style.position = 'fixed';
	canvasCaptura.style.top = '30%';
	canvasCaptura.style.left = '9%';
	canvasCaptura.style.marginTop = -150;
	canvasCaptura.style.marginLeft = -150;
	canvasCaptura.style.zIndex = 1;

	
	var exp = new Image();
	exp.id = 'exp'
	exp.src = 'assets/info/exp.png';
	var experiencia = " : "+1059860;
	var canvasExperiencia = document.createElement('canvas');
	canvasExperiencia.id = 'cExperiencia';
	canvasExperiencia.style.position = 'fixed';
	canvasExperiencia.style.top = '37%';
	canvasExperiencia.style.left = '9%';
	canvasExperiencia.style.marginTop = -150;
	canvasExperiencia.style.marginLeft = -150;
	canvasExperiencia.style.zIndex = 1;

	var cosademedir = new Image();
	cosademedir.id = 'cosademedir'
	cosademedir.src = 'assets/info/altura.png';
	var altura = " : "+0.5;
	var canvasAltura = document.createElement('canvas');
	canvasAltura.id = 'cAltura';
	canvasAltura.style.position = 'fixed';
	canvasAltura.style.top = '45%';
	canvasAltura.style.left = '9%';
	canvasAltura.style.marginTop = -150;
	canvasAltura.style.marginLeft = -150;
	canvasAltura.style.zIndex = 1;

	var cosadepesar = new Image();
	cosadepesar.id = 'cosadepesar'
	cosadepesar.src = 'assets/info/peso.png';
	var peso = " : "+9.5;
	var canvasPeso = document.createElement('canvas');
	canvasPeso.id = 'cPeso';
	canvasPeso.style.position = 'fixed';
	canvasPeso.style.top = '53%';
	canvasPeso.style.left = '9%';
	canvasPeso.style.marginTop = -150;
	canvasPeso.style.marginLeft = -150;
	canvasPeso.style.zIndex = 1;
	
	var masculino = new Image();
	masculino.id = 'masculino'
	masculino.src = 'assets/info/macho.png'
	var femenino = new Image();
	femenino.id = 'femenino'
	femenino.src = 'assets/info/hembra.png'
	var genero = " : "+0.5+ ",         	: "+(1-0.5);
	var canvasGenero = document.createElement('canvas');
	canvasGenero.id = 'cGenero';
	canvasGenero.style.position = 'fixed';
	canvasGenero.style.top = '61%';
	canvasGenero.style.left = '9%';
	canvasGenero.style.marginTop = -150;
	canvasGenero.style.marginLeft = -150;
	canvasGenero.style.zIndex = 1;
	

	var tipo = "Tipo 1:        Tipo 2: ";
	var canvasTipos = document.createElement('canvas');
	canvasTipos.id = 'cTipo';
	canvasTipos.style.position = 'fixed';
	canvasTipos.style.top = '69%';
	canvasTipos.style.left = '9%';
	canvasTipos.style.marginTop = -150;
	canvasTipos.style.marginLeft = -150;
	canvasTipos.style.zIndex = 1;

	var tier = new Image();
	tier.id = 'tier'
	tier.src = 'assets/info/tier.png'
	var rol = new Image();
	rol.id = 'rol'
	rol.src = 'assets/info/rol.png'
	var competitivo = " : "+"LC"+ ",       :"+ "Sweeper";
	var canvasCompetitivo = document.createElement('canvas');
	canvasCompetitivo.id = 'cCompetitivo';
	canvasCompetitivo.style.position = 'fixed';
	canvasCompetitivo.style.top = '77%';
	canvasCompetitivo.style.left = '9%';
	canvasCompetitivo.style.marginTop = -150;
	canvasCompetitivo.style.marginLeft = -150;
	canvasCompetitivo.style.zIndex = 1;

	document.body.appendChild(canvasCaptura);	
	$(canvasCaptura).ready(function(){
		var ctx = canvasCaptura.getContext("2d");
		ctx.drawImage(captura,10,40, 35, 35);
		ctx.font = "30px Arial"
		ctx.fillText(ratiocaptura, 60, 73)		
	  });
	document.body.appendChild(canvasPasos);	
	$(canvasPasos).ready(function(){
	  var ctx = canvasPasos.getContext("2d");
	  ctx.drawImage(huevo,10,40, 35, 46);
	  ctx.font = "30px Arial"
	  ctx.fillText(pasos, 60, 73)		
	  ctx.drawImage(huellas,165, 40, 35, 46);
	});
	document.body.appendChild(canvasAmistad);	
	$(canvasAmistad).ready(function(){
		var ctx = canvasAmistad.getContext("2d");
		ctx.drawImage(corazoncillo,10,40, 35, 35);
		ctx.font = "30px Arial"
		ctx.fillText(amistad, 60, 65)
	  });
	  document.body.appendChild(canvasExperiencia);	
	  $(canvasExperiencia).ready(function(){
		  var ctx = canvasExperiencia.getContext("2d");
		  ctx.drawImage(exp,10,40, 35, 35);
		  ctx.font = "30px Arial"
		  ctx.fillText(experiencia, 60, 73)		
		});
	document.body.appendChild(canvasAltura);	
	$(canvasAltura).ready(function(){
		var ctx = canvasAltura.getContext("2d");
		ctx.drawImage(cosademedir,10,40, 35, 35);
		ctx.font = "30px Arial"
		ctx.fillText(altura, 60, 73)		
	});
	document.body.appendChild(canvasPeso);	
	$(canvasPeso).ready(function(){
		var ctx = canvasPeso.getContext("2d");
		ctx.drawImage(cosadepesar,10,40, 35, 35);
		ctx.font = "30px Arial"
		ctx.fillText(peso, 60, 73)		
	});
	document.body.appendChild(canvasGenero);	
	$(canvasGenero).ready(function(){
		var ctx = canvasGenero.getContext("2d");
		ctx.drawImage(masculino,10,40, 35, 35);
		ctx.font = "30px Arial"
		ctx.fillText(genero, 60, 73)
		ctx.drawImage(femenino,165,40, 35, 46);		
	});
	document.body.appendChild(canvasTipos);
	$(canvasTipos).ready(function(){
		var ctx = canvasTipos.getContext("2d");
		ctx.drawImage(electrico,120,40, 35, 35);
		ctx.font = "30px Arial"
		ctx.fillText(tipo, 10, 73)		
	});
	document.body.appendChild(canvasCompetitivo);
	$(canvasCompetitivo).ready(function(){
		var ctx = canvasCompetitivo.getContext("2d");
		ctx.drawImage(tier,10,40, 35, 46);
		ctx.font = "30px Arial"
		ctx.fillText(competitivo, 45, 73)		
		ctx.drawImage(rol,125, 40, 45, 45);
	});
	  document.body.appendChild(titulo_nombre);	
		document.body.appendChild(titulo_japones);	
		document.body.appendChild(titulo_numero);
		document.body.appendChild(titulo_clasificacion);
	  $(document).ready(function(){
		$("#titulo_nombre").text(nombre);
		$("#titulo_numero").text(numero);
		$("#titulo_japones").text(nombre_japones);
		$("#titulo_clasificacion").text(clasificacion);
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
			},			
			yAxes: {
				display: false,
			},		
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