//Declaration de variables
var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var enreg_valeurs = [];
var enreg_id_colonnes = [];
var colonnes_retourne = 0;

//Permet de faire un enregistrement aleatoire des colonnes
Array.prototype.enreg_colonne_aleatoire = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

//
function nvlle_partie(){
	colonnes_retourne = 0;
	var output = '';
    memory_array.enreg_colonne_aleatoire();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="colonne_'+i+'" onclick="colonn_enr_retourne(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}

function colonn_enr_retourne(colonne,val){
	if(colonne.innerHTML == "" && enreg_valeurs.length < 2){
		colonne.style.background = 'blue';
		colonne.innerHTML = val;
		if(enreg_valeurs.length == 0){
			enreg_valeurs.push(val);
			enreg_id_colonnes.push(colonne.id);
		} else if(enreg_valeurs.length == 1){
			enreg_valeurs.push(val);
			enreg_id_colonnes.push(colonne.id);
			if(enreg_valeurs[0] == enreg_valeurs[1]){
				colonnes_retourne += 2;

				// On renitialise les valeurs
				enreg_valeurs = [];
            	enreg_id_colonnes = [];

				// Vérifier si l'ensemble du tableau est effacé
				if(colonnes_retourne == memory_array.length){
					alert("Felicitation vous avez gagné!! cliquez sur 'Ok' pour une nouvelle partie");
					document.getElementById('memory_board').innerHTML = "";
					nvlle_partie();
				}
			} else {
				function colonne_retourne2(){
				    // Retournez les 2 colonnes à l'envers
				    var colonne_1 = document.getElementById(enreg_id_colonnes[0]);
				    var colonne_2 = document.getElementById(enreg_id_colonnes[1]);
				    colonne_1.style.background = 'url() no-repeat';
            	    colonne_1.innerHTML = "";
				    colonne_2.style.background = 'url() no-repeat';
            	    colonne_2.innerHTML = "";

				    //  On renitialise les valeurs
				    enreg_valeurs = [];
            	    enreg_id_colonnes = [];
				}
				setTimeout(colonne_retourne2, 700);
			}
		}
	}
}

//Animation du texte Memory game play

function switchClass(i) {
   var lis = $('#home-news > div');
   lis.eq(i).removeClass('home_header_on');
   lis.eq(i).removeClass('home_header_out');
    lis.eq(i = ++i % lis.length).addClass('home_header_on');
    lis.eq(i = ++i % lis.length).addClass('home_header_out');
    setTimeout(function() {
        switchClass(i);
    }, 3500);
}

$(window).load(function() {
   switchClass(-1);
});