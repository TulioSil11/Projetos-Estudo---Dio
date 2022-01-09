function start() { // Inicio da fun��o start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div class='anima1' id='jogador'></div>");
	$("#fundoGame").append("<div class='anima2' id='inimigo1'></div>");
	$("#fundoGame").append("<div id='energia'></div>");
	$("#fundoGame").append("<div id='energiaInimigo'></div>");

	//Principais variaveis do jogo

	var jogo = {};
	var jogadorPosicaoInicial = 300;
	var inimigoPosicaoInicial = 600;
	var TECLA = {
		A: 65,
		D: 68,
		U:85,
		I:73,
		O:79
	}
	jogo.pressionou = [];
	var jogadorPodeDarUmAtaque = true;
	var inimigoPodeDarUmAtaque = true;
	var energiaAtualJogador=100;
	var energiaAtualInimigo=100;

	$("#jogador").css("left",jogadorPosicaoInicial);
	$("#inimigo1").css("left",inimigoPosicaoInicial);

	//Verifica se o usu�rio pressionou alguma tecla	
	$(document).keydown(function(e){
		jogo.pressionou[e.which] = true;
		});
	
	
		$(document).keyup(function(e){
		   jogo.pressionou[e.which] = false;
		});

		
	//Game Loop

	jogo.timer = setInterval(loop,30);
	
	function loop() {

		movejogador();
		colisao()
		inimigoControl();
		energia();

	} // Fim da fun��o loop()

	
	function movejogador() {
	
		if (jogo.pressionou[TECLA.A]) {
			var esquerda = parseInt($("#jogador ").css("left"));
			$("#jogador").css("left",esquerda-10);
			moveJogadorParaEsquerda();
			if (esquerda<=0) {
		
				$("#jogador").css("left",esquerda+10);
			}
		}
		
		if (jogo.pressionou[TECLA.D]) {

			var esquerda = parseInt($("#jogador").css("left"));
			$("#jogador").css("left",esquerda+10);
			moveJogarParaDireita();
			if (esquerda>=920) {
		
			$("#jogador").css("left",esquerda-10);
			}
		}

		if (jogo.pressionou[TECLA.U]) {
			
			jogadorSoco();	
		}

		if (jogo.pressionou[TECLA.I]) {
			
			jogadorChute();
		}

		if (jogo.pressionou[TECLA.O]) {
			
			jogadorChute2();
		}
	
	} // fim da fun��o movejogador()

	function moveJogarParaDireita() {
		document.getElementById("jogador").style.backgroundImage="url(assets/img/jogador/movimento-direita.png)";
		var tempoDeMovimentoParaDireita=window.setInterval(resetaMovimentoDireita, 550);
		function resetaMovimentoDireita() {
			document.getElementById("jogador").style.backgroundImage="url(assets/img/jogador/parado.png)";
			window.clearInterval(tempoDeMovimentoParaDireita);
			tempoDeMovimentoParaDireita=null;
		}		
	}

	function moveJogadorParaEsquerda() {
		document.getElementById("jogador").style.backgroundImage="url(assets/img/jogador/movimento-esquerda.png)";
		var tempoDeMovimentoParaEsquerda=window.setInterval(resetaMovimentoEsquerda,550);
		function resetaMovimentoEsquerda() {
			document.getElementById("jogador").style.backgroundImage="url(assets/img/jogador/parado.png)";
			window.clearInterval(tempoDeMovimentoParaEsquerda);
			tempoDeMovimentoParaEsquerda=null;
		}
	}

	function jogadorSoco(){
		if(jogadorPodeDarUmAtaque === true) {
			jogadorPodeDarUmAtaque = false;
			let posiçaoEsquerda = parseInt($("#jogador").css("left"));
			$("#fundoGame").append("<div class='anima3' id='jogadorSoco'></div");
			$("#jogador").remove();
			$("#jogadorSoco").css("left",posiçaoEsquerda);

			var tempoDoSoco=window.setInterval(resetaSoco, 500);
		}

		function resetaSoco() {
			let posiçaoJogador = parseInt($("#jogadorSoco").css("left"));
			window.clearInterval(tempoDoSoco);
			tempoDoSoco=null;
			$("#jogadorSoco").remove();
			jogadorPodeDarUmAtaque=true;
			$("#fundoGame").append("<div class='anima1' id='jogador'></div>");
			$("#jogador").css("left",posiçaoJogador);
		}
	}

	function jogadorChute() {
		if(jogadorPodeDarUmAtaque === true) {
			jogadorPodeDarUmAtaque = false;
			let posiçaoEsquerda = parseInt($("#jogador").css("left"));
			$("#fundoGame").append("<div class='anima4' id='jogadorChute'></div");
			$("#jogador").remove();
			$("#jogadorChute").css("left",posiçaoEsquerda);
		
			var tempoDoChute=window.setInterval(resetaChute, 700);
		}
		
		function resetaChute() {
			let posiçaoJogador = parseInt($("#jogadorChute").css("left"));
			window.clearInterval(tempoDoChute);
			tempoDoChute=null;
			$("#jogadorChute").remove();
			jogadorPodeDarUmAtaque=true;
			$("#fundoGame").append("<div class='anima1' id='jogador'></div>");
			$("#jogador").css("left",posiçaoJogador);
		}
		
			
	}

	function jogadorChute2() {
		if(jogadorPodeDarUmAtaque === true) {
			jogadorPodeDarUmAtaque = false;
			let posiçaoEsquerda = parseInt($("#jogador").css("left"));
			$("#fundoGame").append("<div class='anima5' id='jogadorChute2'></div");
			$("#jogador").remove();
			$("#jogadorChute2").css("left",posiçaoEsquerda);
		
			var tempoDoChute2=window.setInterval(resetaChute2, 800);
		}
		
		function resetaChute2() {
			let posiçaoJogador = parseInt($("#jogadorChute2").css("left"));
			window.clearInterval(tempoDoChute2);
			tempoDoChute2=null;
			$("#jogadorChute2").remove();
			jogadorPodeDarUmAtaque=true;
			$("#fundoGame").append("<div class='anima1' id='jogador'></div>");
			$("#jogador").css("left",posiçaoJogador);
		}
	} 

	function colisao() {
		
		var colisao1 = ($("#jogador").collision($("#inimigo1")));
		var colisao2 = ($("#inimigo1").collision($("#jogador")));
		var colisao3 = ($("#jogadorSoco").collision($("#inimigo1")));
		var colisao4 = ($("#jogadorChute").collision($("#inimigo1")));
		var colisao5 = ($("#jogadorChute2").collision($("#inimigo1")));
		var colisao6 = ($("#inimigoSoco").collision($("#jogador")));

		//jogador com o inimigo
		if(colisao1.length>0) {
			var esquerda = parseInt($("#jogador ").css("left"));
			$("#jogador").css("left",esquerda-10);	
			inimigoSoco();
			
			function inimigoSoco(){
				if(inimigoPodeDarUmAtaque === true) {
					inimigoPodeDarUmAtaque = false;
					let posiçaoEsquerda = parseInt($("#inimigo1").css("left"));
					$("#fundoGame").append("<div class='anima6' id='inimigoSoco'></div");
					$("#inimigo1").remove();
					$("#inimigoSoco").css("left",posiçaoEsquerda);
			
					var tempoDoSoco=window.setInterval(resetaSoco, 1000);
				}
			
			function resetaSoco() {
				let posicaoInimigo = parseInt($("#inimigoSoco").css("left"));
				window.clearInterval(tempoDoSoco);
				tempoDoSoco=null;
				$("#inimigoSoco").remove();
				inimigoPodeDarUmAtaque=true;
				$("#fundoGame").append("<div class='anima2' id='inimigo1'></div>");
				$("#inimigo1").css("left",posicaoInimigo);
			}
		}
			
	}
	
		//inimigo com o jogador
		if(colisao2.length>0) {
			var esquerda = parseInt($("#inimigo").css("left"));
			$("#inimigo").css("left",esquerda+10);
		
		}

		//Soco do jogador com inimigo sem defesa
		if(colisao3.length>0) {
			energiaAtualInimigo = energiaAtualInimigo - 1;
			var posicaoInimigo = parseInt($("#inimigo1").css("left"));
			var tempoDeRecuo = window.setInterval(inimigoRecua, 800);
			function inimigoRecua() {
				$("#inimigo1").css("left",posicaoInimigo+15);
				window.clearInterval(tempoDeRecuo);
				tempoDeRecuo=null
			}

		}

		//Chute do jogador no inimigo 
		if(colisao4.length>0) {
			energiaAtualInimigo = energiaAtualInimigo - 1;
			var posicaoInimigo = parseInt($("#inimigo1").css("left"));
			var tempoDeRecuo = window.setInterval(inimigoRecua, 800);
			function inimigoRecua() {
				$("#inimigo1").css("left",posicaoInimigo+10);
				window.clearInterval(tempoDeRecuo);
				tempoDeRecuo=null;
			}

		}

		//Chute2 do jogador no inimigo 
		if(colisao5.length>0) {
			energiaAtualInimigo = energiaAtualInimigo - 1;
			var posicaoInimigo = parseInt($("#inimigo1").css("left"));
			var tempoDeRecuo = window.setInterval(inimigoRecua, 800);
			function inimigoRecua() {
				$("#inimigo1").css("left",posicaoInimigo+15);
				window.clearInterval(tempoDeRecuo);
				tempoDeRecuo=null;
			}

		}

		//Ataque do inimigo
		if(colisao1.length>0){
			energiaAtualJogador = energiaAtualJogador - 25;
			var posicaoJogador = parseInt($("#jogador").css("left"));
			var tempoDeRecuo = window.setInterval(jogadorRecua, 800);
			function jogadorRecua() {
				$("#jogador").css("left",posicaoJogador-15);
				window.clearInterval(tempoDeRecuo);
				tempoDeRecuo=null;
			}
		}
	}

	function inimigoControl(){
		var posiçaoJogador = parseInt($("#jogador ").css("left"));
		var posicaoInimigo = parseInt($("#inimigo1").css("left"));
		var distancia = posicaoInimigo - posiçaoJogador;
		if(distancia > 80){
			$("#inimigo1").css("left",posicaoInimigo-5);

		}
		
	
	}

	function energia(){
	$("#energia").html("<h1> Jogador : " + energiaAtualJogador); 
	$("#energiaInimigo").html("<h1>Inimigo : " + energiaAtualInimigo); 

		if (energiaAtualInimigo <= 0) {
			GanhouOJogo();
		}
		if (energiaAtualJogador<= 0) {		
			gameOver();
		}
	}

	function gameOver() {
		fimdejogo=true;
		
		window.clearInterval(jogo.timer);
		jogo.timer=null;
		
		$("#jogador").remove();
		$("#inimigo1").remove();		
		$("#fundoGame").append("<div id='fim'></div>");
		
		$("#fim").html("<h1> Game Over </h1> <div id='reinicia' onClick=reiniciaJogo()><a href='index.html'>Jogar Novamente</a></div>");
	} // Fim da fun��o gameOver();

	function GanhouOJogo(){
		fimdejogo=true;
		
		window.clearInterval(jogo.timer);
		jogo.timer=null;
		
		$("#jogador").remove();
		$("#inimigo1").remove();		
		$("#fundoGame").append("<div id='fim'></div>");
		$("#fim").html("<h1> Voce Ganhou!! </h1> <div id='reinicia' onClick=reiniciaJogo()><a href='index.html'>Jogar Novamente</a></div>");
	}
} // Fim da funcao start

function reiniciaJogo() {
	somGameover.pause();
	$("#fim").remove();
} //Fim da fun��o reiniciaJogo
