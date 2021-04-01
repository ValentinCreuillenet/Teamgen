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

function fillDropdown(drop,list){
    for(let i=0; i<list.length; i++){
        let opt = document.createElement('option');
        opt.innerHTML = list[i];
        drop.appendChild(opt);
    }
}
/**
 * Cette fonction ajoute un element a une liste HTML
 * @param {*} list La liste a laquelle ajouter l'element            UL
 * @param {*} element L'element a rajouter              selectall[i]
 */

function addToList(list,element){
        var li = document.createElement('li');
        li.innerText = element;
        list.appendChild(li); 
}

  
/**
 * Cette fonction supprime un element d'une liste HTML
 * @param {*} list La liste a laquelle supprimer l'element
 * @param {*} element L'element a supprimer
 */
function removeFromList(list,element){
    element.remove();
}

/**
 * Cette fonction indique si un apprenants ets considéré comme fort part le formateur
 * @param {*} leanrer L'apprenant à vérifier
 */
function isStrong(leanrer){
    if(strongLevel.includes(learner))return true;
    else return false;
}

/**
 * Cette fonction indique si un apprenants est considéré comme faible par le formateur
 * @param {*} learner 
 */
function isWeak(learner){
    if(weakLevel.includes(learner))return true;
    else return false;
}


/**
 * Cette fonction indique si un apprenants passé en argument peut être mit dans le groupe 1 en fonction de ses indisponibilités
 * (Le groupe 1 est présent le Lund/Mercredi/Vendredi)
 * @param {*} leanrer L'apprenant a vérfifer
 */
function canBeinGroupOne(leanrer){
    if(!cantMonday.includes(leanrer) 
    && !cantWedensday.includes(leanrer) 
    && !cantFriday.includes(leanrer)) return true;
    else return false;
}

/**
 * Cette fonction indique si un apprenant passé en argument peut être mit dans le groupe 2 en fonction de ses indisponibilités 
 * (Le groupe 2 est présent le Mardi/Jeudi)
 * @param {*} learner 
 */
function canBeinGroupTwo(learner){
    if(!cantTuesday.includes(learner) 
    && !cantThursday.includes(learner)) return true;
    else return false;
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
 * Cette fonction affiche les groupes d'apprenant de la semaine dans un tableau HTML
 * @param {*} groups La liste des groupes d'apprenants a afficher
 */
function displayGroups(groups){
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    th1.innerText = 'Groupe 1';
    th2.innerText = 'Groupe 2';

    // table.innerHTML = groups 

        
    for(let i=0; i<8; i++){
        let tr = document.createElement('tr');
        tr.innerText = "?";
        
        for(let j=0; j<2; j++){
            let td = document.createElement('td');
            td.innerText = "?";
            tr.appendChild(td);
        }
        th1.appendChild(tr)
        th2.appendChild(tr)
        tbody.appendChild(th1)
        tbody.appendChild(th2)
       
    }
    table.appendChild(tbody);
}




/**
 * Cette fonction distribue sur chaque liste déroulante tout les apprenants
 */
function fillAllSelects(){
    for(let i=0; i<selectall.length; i++){
        fillDropdown(selectall[i], apprenants);  
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
