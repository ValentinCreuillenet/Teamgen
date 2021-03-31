//La liste de tout les apprenants
var apprenants = ['Lucas Steichen', 'Noureddine Benomar', 'Noureddine Benomar', 'Tamara ALCALA JIMENEZ',
'Valentin Creuillenet','Alexandre Labsi', 'Maxime Guichon', 'Yohan Beneito', 'Laurene Georges', 'Sidney Carlos',
'Juan Roussille','Lorenzo Cima', 'Maïalen Watrigant'];

//La liste de tout les apprenants considéres comme "forts"
var strongLevel = [];

//La lsite de tout les apprenants considérés comme "faibles"
var weakLevel = [];

//La liste des apprenants indisponible le lundi
var cantMonday = [];

//La liste des apprenants indisponible le mardi
var cantTuesday = [];

//La liste des apprenants indisponible le mercredi
var cantWedensday  = [];

//La liste des apprenants indisponible le jeudi 
var cantThursday = [];

//La lsite des apprenants indisponible le vendredi
var cantFriday = [];



/**
 * Cette fonction rempli un menu de choix avec une liste
 * @param {*} drop Le menu a remplir
 * @param {*} list La liste avec laquel le remplir
 */


let selectall = document.getElementsByName('list_apprenant');
let select = document.getElementsByName('list_apprenant')[0];

function fillDropdown(drop,list){
    for(let i=0; i< list.length; i++){
        let opt = document.createElement('option');
        opt.innerHTML = list[i];
        drop.appendChild(opt);
    }
}


/**
 * Cette fonction ajoute un element a une liste HTML
 * @param {*} list La liste a laquelle ajouter l'element
 * @param {*} element L'element a rajouter
 */
function addToList(list,element){

}

/**
 * Cette fonction supprime un element d'une liste HTML
 * @param {*} list La liste a laquelle supprimer l'element
 * @param {*} element L'element a supprimer
 */
function removeFromList(list,element){

}

/**
 * Cette fonction retourne une list des apprenants d'un niveau passé en argument
 * @param {*} level Le niveau des apprenants a récupérer
 */
function getLevels(level){

}

/**
 * Cette fonction retourne la liste des apprenants indsiponible pour un jour donnée en argument
 * @param {*} day Le jour a verifiée les apprenats indisponibles
 */
function getUnavailability(day){

}

/**
 * Cette fonction indique si un apprenants passé en argument peut être mit dans le groupe 1 en fonction de ses indisponibilités
 * (Le groupe 1 est présent le Lund/Mercredi/Vendredi)
 * @param {*} leanrer L'apprenant a vérfifer
 */
function canBeinGroupOne(leanrer){

}

/**
 * Cette fonction indique si un apprenant passé en argument peut être mit dans le groupe 2 en fonction de ses indisponibilités 
 * (Le groupe 2 est présent le Mercredi/Jeudi)
 * @param {*} learner 
 */
function canBeinGroupTwo(learner){

}

/**
 * Cette fonction génère les deux groupe d'apprenants de la semaine et retourne ces groupe dans une liste
 */
function generateGroups(){

}

/**
 * Cette fonction affiche les groupes d'apprenant de ala semaine dans un tableau HTML
 * @param {*} groups La lsite des groupes d'apprenants a afficher
 */
function displayGroups(groups){

}

/**
 * Cette fonction distribue sur chaque liste déroulante tout les apprenants
 */
function fillAllSelects(){
    for(let i=0; i<selectall.length; i++){
        fillDropdown(selectall[i], apprenants)
        
        
    }
}

/**
 * Appel des fonctions
 */

fillDropdown(select, apprenants);
fillAllSelects()

/**
 * Gestionnaire d'event
 */

/**
 * Cette fonction ajoute un EventListener sur un bouton pour y ajouter la fonction addToList
 * @param {*} idBtn L'ID du boutton sur lequel ajouter l'event
 * @param {*} idList L'ID de la list a passer en argument
 * @param {*} idSelect L'ID du select dans lequel chercher l'element a passer en argument
 */
function addEventAdd(idBtn,idList,idSelect){
    document.getElementById(idBtn).addEventListener("click",()=>{
        addToList(document.getElementById(idList),
        document.getElementById(idSelect).options[document.getElementById(idSelect)].innerHTML);
    })
}
/**
 * 
 * @param {*} idBtn L'ID du boutton sur lequel ajouter l'event
 * @param {*} idList L'ID de la list a passer en argument
 * @param {*} idSelect L'ID du select dans lequel chercher l'element a passer en argument
 */
function addEventRemove(idBtn,idList,idSelect){
    document.getElementById(idBtn).addEventListener("click",()=>{
        removeFromList(document.getElementById(idList),
        document.getElementById(idSelect).options[document.getElementById(idSelect)].innerHTML);
    })
}


//Quand on appuie sur le bouton ajouter a la liste des forts l'event s'execute
addEventAdd("add strong","list strong","strongs")

//Quand on appuie sue le bouton supprimer a la liste des forts l'event s'execute
addEventRemove("remove strong","list strong","strongs")

//Quand on appuie sur le bouton ajouter a la liste des faibles, l'event s'execute
addEventAdd("add weak", "list weak","weaks");
 
//Quand on appuie sur le bouton supprimer a la liste des faibles, l'event s'execute
addEventRemove("remove weak","list weak","weaks");
 


//Qaund on appuie sur le bouton générer les groupes, les groupes sont généré
document.getElementById("TeamGen").addEventListener("click",()=>{
    displayGroups(generateGroups());
})