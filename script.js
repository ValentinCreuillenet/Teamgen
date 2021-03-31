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
 * Cette fonction indique si un apprenants ets considéré comme fort part le formateur
 * @param {*} leanrer L'apprenant à vérifier
 */
function isStrong(leanrer){

}

/**
 * Cette fonction indique si un apprenants est considéré comme faible par le formateur
 * @param {*} learner 
 */
function isWeak(learner){

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
 * Cette fonction génère duex groupe d'apprenants en fonction contraites choisits par l'utilisateur et retourne les deux groupe dans un tableau
 * @param {*} learners La liste de tout les apprenants
 */
function generateGroups(learners){
    let groupOne = [];                      //Le groupe 1
    let groupTwo = [];                      //Le groupe 2
    let groups = [groupOne,groupTwo];       //La liste des groupes qui seront retourné a la fin du traitement
    let strongsOne = 0;                     //Le nombre d'apprenants "forts" dans le groupe 1
    let strongTwo = 0;                      //Le nombre d'apprenants "forts" dans le groupe 2
    let weakOne = 0;                        //Le nombre d'apprenants "faible" dans le groupe 1
    let weakTwo = 0;                        //Le nombre d'apprenants "faible" dans le groupe 2
    let totalLearners = learners.length;    //Le nombre total d'apprenants

    while( (groupOne.length + groupTwo.length) < totalLearners ){
            
        learners.foreach( learner =>{

            if(!canBeinGroupOne(learner)){
                groupTwo += learner;
                if(isStrong(leanrer))strongTwo++;
                if(isWeak(leanrer))weakTwo++;
                learners.splice(learners.indexOf(leanrer), 1 );
            }
            if(!canBeinGroupTwo(learner)){
                groupOne += learner;
                if(isStrong(leanrer))strongOne++;
                if(isWeak(leanrer))weakOne++;
                learners.splice(learners.indexOf(leanrer), 1 );
            } 

            let rand = Math.round(Math.random);

            if(rand === 0 ){
                if(isStrong(learner) && strongsOne <= strongTwo && groupOne.length < Math.ceil(totalLearners/2) ){
                    groupOne += learner;
                    strongsOne++;
                    learners.splice(learners.indexOf(leanrer), 1 );

                } else if(isWeak(learner) && weakOne <= weakTwo && groupOne.length < Math.ceil(totalLearners/2)){
                    groupOne += learner;
                    weakOne++;
                    learners.splice(learners.indexOf(leanrer), 1 );

                } else if(groupOne.length < Math.ceil(totalLearners/2)){
                    groupOne += leanrer;
                    learners.splice(learners.indexOf(leanrer), 1 );
                }

            } else {
                if(isStrong(learner) && strongsTwo <= strongOne && groupTwo.length < Math.ceil(totalLearners/2) ){
                    groupTwo += learner;
                    strongsTwo++;
                    learners.splice(learners.indexOf(leanrer), 1 );

                } else if(isWeak(learner) && weakTwo <= weakOne && groupTwo.length < Math.ceil(totalLearners/2)){
                    groupTwo += learner;
                    weakTwo++;
                    learners.splice(learners.indexOf(leanrer), 1 );
                    
                } else if(groupTwo.length < Math.ceil(totalLearners/2)){
                    groupTwo += leanrer;
                    learners.splice(learners.indexOf(leanrer), 1 );
                }
            }

        })
    }
    return groups;
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
