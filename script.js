//La liste de tout les apprenants
var apprenants = ["Maxime","Juan","Yohan","Laurène","Valentin","Fanny","Noureddine","Marylise",
"Lorenzo","Alexandre","Tamara","Maïalen","Lucas","Sidney","Vincent"];

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
    for(i=0;i<list.children.length;i++){
        if (list.children[i].innerHTML==element){
            list.removeChild(list.children[i]);
        }
    }
}

/**
 * Cette fonction indique si un apprenants ets considéré comme fort part le formateur
 * @param {*} leanrer L'apprenant à vérifier
 */
function isStrong(learner){
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
 * Cette fonction copie un tableau passé en argument
 * @param {*} arr Le tableau a copié
 */
function copyArray(arr){
    let newArr= [];
    arr.forEach(element=>{
        newArr[newArr.length] = element;
    })
    return newArr;
}

/**
 * Cette fonction génère duex groupe d'apprenants en fonction contraites choisits par l'utilisateur et retourne les deux groupe dans un tableau
 * @param {*} learners La liste de tout les apprenants
 */
function generateGroups(allLearners){
    let learners =copyArray(allLearners);    //On copie la tableau passé en argument pour ne pas modifier l'original
    let groupOne = [];                      //Le groupe 1
    let groupTwo = [];                      //Le groupe 2
    let groups = [groupOne,groupTwo];       //La liste des groupes qui seront retourné a la fin du traitement
    let strongsOne = 0;                     //Le nombre d'apprenants "forts" dans le groupe 1
    let strongTwo = 0;                      //Le nombre d'apprenants "forts" dans le groupe 2
    let weakOne = 0;                        //Le nombre d'apprenants "faible" dans le groupe 1
    let weakTwo = 0;                        //Le nombre d'apprenants "faible" dans le groupe 2
    let totalLearners = learners.length;    //Le nombre total d'apprenants


    while( learners.length>0){
            
        learners.forEach( learner =>{

            if(!canBeinGroupOne(learner)){
                groupTwo.push(learner);
                if(isStrong(learner))strongTwo++;
                if(isWeak(learner))weakTwo++;
                learners.splice(learners.indexOf(learner), 1 );
            }
            if(!canBeinGroupTwo(learner)){
                groupOne.push(learner);
                if(isStrong(learner))strongOne++;
                if(isWeak(learner))weakOne++;
                learners.splice(learners.indexOf(learner), 1 );
            } 

            let rand = Math.round(Math.random());

            if(rand == 0 ){
                if(isStrong(learner) && strongsOne <= strongTwo && groupOne.length < Math.ceil(totalLearners/2) ){
                    groupOne.push(learner);
                    strongsOne++;
                    learners.splice(learners.indexOf(learner), 1 );

                } else if(isWeak(learner) && weakOne <= weakTwo && groupOne.length < Math.ceil(totalLearners/2)){
                    groupOne.push(learner);
                    weakOne++;
                    learners.splice(learners.indexOf(learner), 1 );

                } else if(groupOne.length < Math.ceil(totalLearners/2)){
                    groupOne.push(learner);
                    learners.splice(learners.indexOf(learner), 1 );
                }

            } else {
                if(isStrong(learner) && strongsTwo <= strongOne && groupTwo.length < Math.ceil(totalLearners/2) ){
                    groupTwo.push(learner);
                    strongsTwo++;
                    learners.splice(learners.indexOf(learner), 1 );

                } else if(isWeak(learner) && weakTwo <= weakOne && groupTwo.length < Math.ceil(totalLearners/2)){
                    groupTwo.push(learner);
                    weakTwo++;
                    learners.splice(learners.indexOf(learner), 1 );
                    
                } else if(groupTwo.length < Math.ceil(totalLearners/2)){
                    groupTwo.push(learner);
                    learners.splice(learners.indexOf(learner), 1 );
                }
            }

        })
    }
    console.log(groups);
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
    document.body.appendChild(table);
}




/**
 * Cette fonction distribue sur chaque liste déroulante tout les apprenants
 */
function fillAllSelects(){
    let selectall=document.getElementsByTagName("select");
    for(let i=0; i<selectall.length; i++){
        fillDropdown(selectall[i], apprenants);  
    }
}

/**
 * Appel des fonctions
 */

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
        console.log(document.getElementById(idSelect).value);
        addToList(document.getElementById(idList),
        document.getElementById(idSelect).value);
        
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
        document.getElementById(idSelect).value);
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
    displayGroups(generateGroups(apprenants));
})
