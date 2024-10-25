// Retourne une ligne de taille w, avec le caractère c
// Exemple : "*******"
function fullLine(w, c) {
	let s = "";
	for(let i = 0; i < w; i++){
		s += c;
	}
	
	return s;
}

// Retourne un rectangle avec le caractère c, de w colonnes et h lignes
// Exemple : 
// "*****\n*****\n*****\n"
//
// Puisque le caractère \n est un retour à la ligne, ce mot correspond en réalité au rectangle :
// "*****
//  *****
//  *****"
function fullRectangle(w, h, c) {
	let s="";
	for(let i = 0; i < h; i++){
		s += fullLine(w, c);
		s += "\n";
	}

	return s;
}

// Retourne une ligne de taille w avec c1 au bord, c2 au milieu
// Exemple : "*-----*"
function emptyLine(w, c1, c2) {
	let s="";
	s += c1; 
	for(let i = 0; i < w-2; i++){
		s += c2;
	}
	if(w > 1){s += c1;}

	return s;
}

// Retourne un rectangle avec c1 aux bords et c2 au milieu, de w colonnes et h lignes
// Exemple : "*****\n*---*\n*****\n"
// Dessin correspondant :
// *****
// *---*
// *****
function emptyRectangle(w, h, c1, c2) {
	let s = fullLine(w, c1);
	s += "\n";
	for(let i = 0; i < h-2; i++){
		s += emptyLine(w, c1, c2);
		s += "\n"; 
	}
	if(h > 1){fullLine(w, c1);}

	return s;
}

// Retourne un triangle rectangle avec le caractère c, de hauteur h
// Angle droit en bas à gauche
// Exemple : "*\n**\n***\n****\n"
// Dessin correspondant : 
// *
// **
// ***
// ****
function fullTriangle1(h, c) {
	let s = "";
	for(let i = 1; i <= h; i++){
		for(let j = 0; j < i; j++){
			s += c;
		}
		s += "\n";
	}
	
	return s;
}

// Retourne un triangle rectangle avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à droite
// Exemple : "---*\n--**\n-***\n****\n"
// Dessin correspondant :
// ---*
// --**
// -***
// ****
function fullTriangle2(h, c1, c2) {
	let s = "";
	for(let i = 1; i <= h; i++){
		for(let j = 0; j < h-i; j++){
			s += c2;
		}
		for(let j = h-i; j < h; j++){
			s += c1;
		}
		s += "\n";
	}
	
	return s;
}

// Retourne un triangle isocèle avec les caractères c1 et c2, de hauteur h
// Base en bas
// Exemple : "---*\n--***\n-*****\n*******\n"
// Dessin correspondant :
// ---*
// --***
// -*****
// *******
function fullTriangle3(h, c1, c2) {
	let s = "";
	let n1 = 1;
	let n2 = h-1;
	
	for(let i = 1; i <= h; i++){
		s += fullLine(n2, c2);
		s += fullLine(n1, c1);
		s += "\n";

		n1 += 2;
		n2--;
	}
	
	return s;
}

// Retourne un triangle rectangle vide avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à gauche
// Exemple : "*\n**\n*-*\n****\n"
// Dessin correspondant :
// *
// **
// *-*
// ****
function emptyTriangle1(h, c1, c2) {
	let s = "";
	let i = 1;
	for(i = 1; i < h; i++){
		s += emptyLine(i, c1, c2);
		s += "\n";	 
	}
	s += fullLine(i, c1);
	
	return s;
}

// Retourne un triangle rectangle vide avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à droite
// Exemple : "---*\n--**\n-*-*\n****\n"
// Dessin correspondant :
// ---*
// --**
// -*-*
// ****
function emptyTriangle2(h, c1, c2) {
	let s = "";
	for(i = 1; i <= h-1; i++){
		s += fullLine(h-i, c2);
		s += emptyLine(i, c1, c2);
		s += "\n";	 	
	}
	s += fullLine(h, c1);
	
	return s;
}

// Retourne un triangle isocèle vide avec les caractères c1 et c2, de hauteur h
// Base en bas
// Exemple : "---*\n--*-*\n-*---*\n*******\n"
// Dessin correspondant :
// ---*
// --*-*
// -*---*
// *******
function emptyTriangle3(h, c1, c2) {
	let s = "";
	let n1 = 1;
	let n2 = h-1;
	for(let i = 1; i<=h-1; i++){
		s += fullLine(n2, c2);
		s += emptyLine(n1, c1, c2);
		s += "\n";

		n1 += 2;
		n2--;
	}

	s += fullLine(n1, c1);
	
	return s;
}

// Retourn un "pacman" de hauteur h avec le caractère c1
// Exemple :
// *****\n***\n*\n***\n*****\n"
// Dessin correspondant :
// *****
// ***
// *
// ***
// *****
function pacman(h, c1) {
	let s = "";
	
	if(h%2){
		for(let i = 0; i < h/2; i++){
			s += fullLine(h-2*i, c1);
			s += "\n";
		}

		for(let i = h/2; i < h; i++) {
			s += fullLine(i-1, c1);
			s += "\n";
		}
	}
	else{
		for(let i = 0; i < (h/2)-1; i++){
			s += fullLine((h-2*i)-1, c1);
			s += "\n";
		}

		for(let i = h/2; i < h; i++) {
			s += fullLine(i, c1);
			s += "\n";
		}
	}
	
	return s;
}


// Retourne un sablier de hauteur h avec les caractères c1 et c2
// Exemple :
// "*****\n-***\n--*\n-***\n*****\n"
// Dessin correspondant :
// *****
// -***
// --*
// -***
// *****
function hourglass(h, c1, c2) {
	let s = "";
	for(let i = 0; i < h; i++){
		for(let j = 0; j < h; j++){
			if(j == i || j == h-i-1){
				s += fullLine(h, c1);
			}
			else{
				s += c2;
			}
		}
		s += '\n';
	}
	
	return s;
}


// Retourne un plus de taille w avec les caractères c1 et c2
// Exemple :
// "--*\n--*\n*****\n--*\n--*\n"
// Dessin correspondant :
// --*
// --*
// *****
// --*
// --*
function plus(w, c1, c2) {
	let s = "";
	if(w%2){
		for(let j = 0; j < (w-1)/2; j++){
			s += fullLine((w-1)/2, c2) + c1;
			s += "\n";
		}

		s += fullLine(w, c1);
		s += "\n";
	
		for(let j = ((w-1)/2)+1; j < w; j++){
			s += fullLine((w-1)/2, c2) + c1;
			s += "\n";
		}
	}
	else{
		for(let j = 0; j < (w/2)-1; j++){
			s += fullLine((w/2)-1, c2) + c1 + c1;
			s += "\n";
		}

		for(let j = 0; j < 2; j++){
			s += fullLine(w, c1);
			s += "\n";
		}
	
		for(let j = ((w-1)/2)+1; j < w-1; j++){
			s += fullLine((w/2)-1, c2) + c1 + c1;
			s += "\n";
		}
	}

	return s;
}



// Retourne un multiplié de taille w avec les caractères c1 et c2
// Exemple :
// "*---*\n-*-*\n--*\n-*-*\n*---*\n"
// Dessin correspondant :
// *---*
// -*-*
// --*
// -*-*
// *---*
function times(w, c1, c2) {
	let s = "";
	for(let i = 0; i < w; i++){
		for(let j = 0; j < w; j++){
			if(j == i || j == w-i-1){
				s += c1;
			}
			else{
				s += c2;
			}
		}
		s += '\n';
	}
	return s;
}

// Retourne un serpent horizontal de taille w avec les caractères c1 et c2
// Exemple :
// "*****\n----*\n*****\n*\n*****\n"
// Dessin correspondant :
// *****
// ----*
// *****
// *
// *****
function snake1(w, c1, c2) {
	let s = "";
	for(let i = 1; i <= w; i++){
		if(!(i%4)){
			s += c1 + fullLine(w-1, c2);	
		}

		else if(!(i%2)){
			s += fullLine(w-1, c2) + c1;
		}

		else{
			s += fullLine(w, c1);
		}
		s += "\n";
	}
	return s;
}

// Retourne un serpent vertical de taille w avec les caractères c1 et c2
// Exemple :
// "*-***\n*-*-*\n*-*-*\n*-*-*\n***-*\n"
// Dessin correspondant :
// *-***
// *-*-*
// *-*-*
// *-*-*
// ***-*
function snake2(w, c1, c2) {
	let s = "";
	for(let i = 0; i < w; i++){
		if(i%4 == 1){
			s += c2;
		}
		else{
			s += c1;
		}
	}

	s += '\n';

	for(let i = 0; i < w-2; i++){
		for(let j = 0; j < w; j++){
			if(j%2){
				s += c2;
			} 
			else {
				s += c1;
			}
		}
		s += '\n';
	}

	if(w > 1) {
		for(let j = 0; j < w; j++){
			if(j%4 == 3){
				s += c2;
			} 
			else{
				s += c1;
			}
		}
	}

	return s;
}

// Retourne un échiquier de taille w avec les caractères c1 et c2
// Exemple :
// "*-*-*\n-*-*\n*-*-*\n-*-*\n*-*-*"
// Dessin correspondant :
// *-*-*
// -*-*
// *-*-*
// -*-*
// *-*-*
function checkerboard(w, c1, c2) {
	let s = "";
	for(let i = 0; i < w; i++){
		for(let j = 0; j < w; j++){
			if((i+j)%2){
				s += c2;
			} else{
				s += c1;
			}
		}
		s += "\n";
	}
	return s;
}

// Cf dessin :)
function diagonal1(w, c1, c2) {
	let s = "";
	for(let i = 0; i < w; i++){
		for(let j = 0; j < w; j++){
			if((i+j)%4){
				s += c2;
			} else{
				s += c1;
			}
		}
		s += "\n";
	}
	return s;
}

// Cf dessin :)
function diagonal2(w, c1, c2) {
	let s = "";
	for(let i = 0; i < w; i++){
		for(let j = 0; j < w; j++){
			if((i-j)%4){
				s += c2;
			} else{
				s += c1;
			}
		}
		s += "\n";
	}
	return s;
}