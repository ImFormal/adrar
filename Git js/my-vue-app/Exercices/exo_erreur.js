try{
    prenom
    alert('Bonjour');  
}catch(err){
  console.log(err);
    alert(`Erreur Détectée ALERTE STOPPEZ TOUT: 
        -----------
        Le Nom de l'erreur 
        ${err.name}
        -----------
        Le Message de l'erreur  :
        ${err.message}
        ----------
        L'emplacement de l'erreur:
        ${err.stack}`);
}

function division(){
    let x = prompt('Entrez un premier nombre (numérateur)');
    let y = prompt('Entrez un deuxième nombre (dénominateur)');
    
    if(isNaN(x) || isNaN(y) || x == '' || y == ''){
        throw new Error('Merci de rentrer deux nombres');
    }else if(y == 0){
        // throw new Error('Division par 0 impossible')
        throw console.warn('Division par 0 impossible');
    }else{
        alert(x / y);
    }
}

division();

try{
    division();
}catch(err){
    alert(err.message);
}finally{
    alert(`Ce message s'affichera quoiqu'il arrive`);
}