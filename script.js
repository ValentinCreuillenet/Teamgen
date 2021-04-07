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

function addToList(list,element,arr){
        let isAlreadyInList = false;

        for(i=0;i<list.children.length;i++){
            if (list.children[i].innerHTML==element)isAlreadyInList=true;
        }
        if(!isAlreadyInList){
        var li = document.createElement('li');
        li.innerText = element;
        list.appendChild(li); 
        }
        if(!arr.includes(element))arr.push(element);
}

  
/**
 * Cette fonction supprime un element d'une liste HTML
 * @param {*} list La liste a laquelle supprimer l'element
 * @param {*} element L'element a supprimer
 */
function removeFromList(list,element,arr){
    for(i=0;i<list.children.length;i++){
        if (list.children[i].innerHTML==element){
            list.removeChild(list.children[i]);
        }
    }
    if(arr.includes(element))arr.splice(arr.indexOf(element),1);
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
    let strongOne = 0;                     //Le nombre d'apprenants "forts" dans le groupe 1
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
                if(isStrong(learner) && strongOne <= strongTwo && groupOne.length < Math.ceil(totalLearners/2) ){
                    groupOne.push(learner);
                    strongOne++;
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
                if(isStrong(learner) && strongTwo <= strongOne && groupTwo.length < Math.ceil(totalLearners/2) ){
                    groupTwo.push(learner);
                    strongTwo++;
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
    return groups;
}

/**
 * Cette fonction affiche les groupes d'apprenant de la semaine dans un tableau HTML
 * @param {*} groups La liste des groupes d'apprenants a afficher
 */
function displayGroups(groups){

    let oldTable = document.getElementById("teams");
    if(oldTable)oldTable.remove();
    let table = document.createElement('table');
    table.id="teams";
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    th1.innerText = 'Groupe 1';
    th2.innerText = 'Groupe 2';

    let header = document.createElement("tr");
    header.appendChild(th1);
    header.appendChild(th2);
    table.appendChild(header);
    document.body.appendChild(table);

    for(i=0;i<Math.ceil((groups[0].length+groups[1].length)/2);i++){
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        table.appendChild(row);
        row.appendChild(cell1);
        row.appendChild(cell2);
        
        cell1.innerText = (groups[0][i] ? groups[0][i] : "");
        cell2.innerText = (groups[1][i] ? groups[1][i] : "");
    }
}




/**
 * Cette fonction distribue sur chaque liste déroulante tout les apprenants
 */
function fillAllSelects(){
    let selectall=document.getElementsByTagName("select");
    for(let i=0; i<selectall.length; i++){
        getStudents((students)=>{
            fillDropdown(selectall[i], students);  
        })
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
function addEventAdd(idBtn,idList,idSelect,list){
    document.getElementById(idBtn).addEventListener("click",()=>{
        addToList(document.getElementById(idList),
        document.getElementById(idSelect).value,list);
        
    })
}
/**
 * 
 * @param {*} idBtn L'ID du boutton sur lequel ajouter l'event
 * @param {*} idList L'ID de la list a passer en argument
 * @param {*} idSelect L'ID du select dans lequel chercher l'element a passer en argument
 */
function addEventRemove(idBtn,idList,idSelect,list){
    document.getElementById(idBtn).addEventListener("click",()=>{
        removeFromList(document.getElementById(idList),
        document.getElementById(idSelect).value,list);
    })
}


//Gestionairre d'event

//Quand on appuie sur le bouton ajouter a la liste des forts l'event s'execute
addEventAdd("add strong","list strong","strongs",strongLevel)

//Quand on appuie sue le bouton supprimer a la liste des forts l'event s'execute
addEventRemove("remove strong","list strong","strongs",strongLevel)

//Quand on appuie sur le bouton ajouter a la liste des faibles, l'event s'execute
addEventAdd("add weak", "list weak","weaks",weakLevel);
 
//Quand on appuie sur le bouton supprimer a la liste des faibles, l'event s'execute
addEventRemove("remove weak","list weak","weaks",weakLevel);

//Quand on appuie sur le bouton ajouter a la liste Lundi
addEventAdd("add monday","monday","mondays",cantMonday)

//Quand on appuie sue le bouton supprimer a la liste Lundi
addEventRemove("remove monday","monday","mondays",cantMonday)

//Quand on appuie sur le bouton ajouter a la liste Mardi
addEventAdd("add tuesday","tuesday","tuesdays",cantTuesday)

//Quand on appuie sue le bouton supprimer a la liste Mardi
addEventRemove("remove tuesday","tuesday","tuesdays",cantTuesday)

//Quand on appuie sur le bouton ajouter a la liste Mercredi
addEventAdd("add wednesday","wednesday","wednesdays",cantWedensday)

//Quand on appuie sue le bouton supprimer a la liste Mercredi
addEventRemove("remove wednesday","wednesday","wednesdays",cantWedensday)

//Quand on appuie sur le bouton ajouter a la liste Jeudi
addEventAdd("add thursday","thursday","thursdays",cantThursday)

//Quand on appuie sue le bouton supprimer a la liste Jeudi
addEventRemove("remove thursday","thursday","thursdays",cantThursday)

//Quand on appuie sur le bouton ajouter a la liste Vendredi
addEventAdd("add friday","friday","fridays",cantFriday)

//Quand on appuie sue le bouton supprimer a la liste Vendredi
addEventRemove("remove friday","friday","fridays",cantFriday)
 



//Qaund on appuie sur le bouton générer les groupes, les groupes sont généré
document.getElementById("TeamGen").addEventListener("click",()=>{
    getStudents((students)=>{
        displayGroups(generateGroups(students));
    })
    
})

/**
 * Va chercher les students sur la base de données, ou récupère une liste par défault le cas échéant
 * @param {*} callback Le traitment a éffectuer sur les students
 */
function getStudents(callback){
    let xhr = new XMLHttpRequest();

    xhr.open("GET","studentsURL");

    xhr.onload = ()=>{
        if(xhr.status == 200){
            callback(xhr.responseText);
        }else{
            callback(getDefaultStudents());
        }
    }
    xhr.send();
}

/**
 * Retoure une liste des students par default
 * @returns 
 */
function getDefaultStudents(){
    return ["Princesse","Juan","Yohan","Gourdasse","Valentin","Fanny","Noureddine","Marylise",
    "Lorenzo","Alexandre","Tamara","Maïalen","Lucas","Sidney","Vincent"];
}